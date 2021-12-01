class Quiz < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :questions, dependent: :destroy
end
