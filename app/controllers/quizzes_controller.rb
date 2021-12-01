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
        quiz.questions.insert_all!(quiz_questions, returning: false)
      rescue ActiveRecord::RecordInvalid
        render json: { message: quiz.errors.full_messages }, status: 400
      rescue ActiveRecord::RecordNotUnique
        render json: { message: ["Some records weren't unique"] }, status: 400
      rescue ActiveRecord::ActiveRecordError
        render json: { message: ['Something went wrong'] }, status: 500
      else
        render json: { message: ['Quiz created successfully'] }, status: 200
      end
    end
  end

  def show
  end
end
