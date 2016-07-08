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
    id = self.id
    Friendship.select('user_id2 as f_id').where(user_id1: id)
              .union(Friendship.select('user_id1 as f_id').where(user_id2: id))
              .map { |obj| User.find(obj.f_id) }
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def make_full_name
    self.full_name = fname + " " + lname
  end
end
