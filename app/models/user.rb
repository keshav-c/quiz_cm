class User < ApplicationRecord
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email,
    uniqueness: true,
    presence: true,
    format: {
      with: EMAIL_REGEX,
      message: "invalid"
    }

  has_secure_password
end
