class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :slug

      t.timestamps
    end
    add_index :quizzes, :slug, unique: true
  end
end
