class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.boolean :win
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
