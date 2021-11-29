class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :auth_token

      t.timestamps
    end
    add_index :sessions, :auth_token, unique: true
  end
end
