class User < ActiveRecord::Base
  validates :fname, :lname, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token, :make_full_name

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

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    user && user.is_password?(pw) ? user : nil
  end

  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def make_full_name
    self.full_name = fname + " " + lname
  end
end
