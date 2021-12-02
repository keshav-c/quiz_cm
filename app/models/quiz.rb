class Quiz < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :questions, dependent: :destroy

  def score(sub_data)
    score = 0
    total = 0
    questions.each do |q|
      match_q = sub_data.find { |sub_q| sub_q[:id] == q[:id] }
      if match_q[:answer] == q[:answer]
        score += q[:score]
      end
      total += q[:score]
    end
    return { score: score, total: total }
  end
end
