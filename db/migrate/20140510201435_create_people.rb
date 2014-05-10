class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :wants_to_give_up
      t.text :reason
      t.string :email

      t.timestamps
    end
  end
end
