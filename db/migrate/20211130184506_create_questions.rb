class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.references :quiz, null: false, foreign_key: true
      t.text :question, null: false
      t.string :a, null: false
      t.string :b, null: false
      t.string :c, null: false
      t.string :d, null: false
      t.string :answer, null: false
      t.integer :score, null: false

      t.timestamps
    end
  end
end
