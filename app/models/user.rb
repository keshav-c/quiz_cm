class User < ApplicationRecord
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email,
    uniqueness: true,
    presence: true,
    format: {
      with: EMAIL_REGEX,
      message: "is invalid"
    }
  validates :password,
    presence: true,
    length: { minimum: 8 }

  has_one :session, dependent: :destroy
  has_many :quizzes, dependent: :destroy

  has_secure_password
end
