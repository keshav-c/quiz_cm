class Question < ApplicationRecord
  validates :question, :a, :b, :c, :d, :answer, :score, presence: true

  belongs_to :quiz
end
