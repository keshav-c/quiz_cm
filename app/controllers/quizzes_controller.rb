class QuizzesController < ApplicationController
  def create
    user = logged_in(params[:token])
    if user.nil?
      render json: { message: ['User not logged in'] }, status: 400
    else
      title = params[:quiz][:title]
      slug_p1 = title.parameterize[0..15]
      slug_p2 = params[:token].chars.shuffle.join[0..5]
      slug = [slug_p1, slug_p2].join

      begin
        user.transaction do
          quiz = user.quizzes.create!(title: title, slug: slug)
          quiz_questions = params[:quiz][:questions].map! do |q|
            q_hash = {
              question: q[:qtext],
              a: q[:A],
              b: q[:B],
              c: q[:C],
              d: q[:D],
              score: q[:score],
              answer: q[:answer]
            }
          end
          quiz.questions.create!(quiz_questions)
        end
      rescue ActiveRecord::RecordInvalid
        render json: { message: quiz.errors.full_messages }, status: 400
      rescue ActiveRecord::ActiveRecordError
        render json: { message: ['Something went wrong'] }, status: 500
      else
        render json: { slug: slug }, status: 200
      end
    end
  end

  def show
    puts "here in show"
    puts params[:id]
  end
end
