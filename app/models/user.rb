class User < ActiveRecord::Base
  validates :fname, :lname, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token, :make_full_name

  has_many :posts
  has_many :photos
  has_many :incoming_requests, class_name: "Requesting", foreign_key: :recipient_id
  has_many :outgoing_requests, class_name: "Requesting", foreign_key: :initiator_id

  has_many :incoming, class_name: "User", through: :incoming_requests, source: :initiator
  has_many :outgoing, class_name: "User", through: :outgoing_requests, source: :recipient

  has_many :friendships1, class_name: "Friendship", foreign_key: :user_id1
  has_many :friendships2, class_name: "Friendship", foreign_key: :user_id2

  has_many :friends_test1, class_name: "User", through: :friendships1, source: :user2
  has_many :friends_test2, class_name: "User", through: :friendships2, source: :user1


  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    user && user.is_password?(pw) ? user : nil
  end

  def friends
    user = User.find(self.id)
    user.friends_test1.union(user.friends_test2)
  end

  # def friends
  #
  #   id = self.id
  #
  #   friends_query = <<-SQL
  #
  #     SELECT u1.*
  #     FROM users AS u2
  #     JOIN friendships AS f
  #       ON u2.id = f.user_id2
  #     JOIN users AS u1
  #       ON u1.id = f.user_id1
  #     WHERE u2.id = #{id}
  #
  #     UNION
  #
  #     SELECT u2.*
  #     FROM users AS u1
  #     JOIN friendships AS f
  #       ON u1.id = f.user_id1
  #     JOIN users AS u2
  #       ON u2.id = f.user_id2
  #     WHERE u1.id = #{id};
  #
  #   SQL
  #
  #   User.find_by_sql(friends_query)
  #
  # end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def make_full_name
    self.full_name = fname + " " + lname
  end
end
