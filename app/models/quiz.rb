class Quiz < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :questions, dependent: :destroy

  def score(user_answers)
    score = 0
    total = 0
    user_answers.each do |uans|
      question = questions.find { |q| q.id == uans[:id].to_i }
      if question.answer == uans[:answer]
        score += question.score
      end
      total += question.score
    end
    return { score: score, total: total }
  end
end
