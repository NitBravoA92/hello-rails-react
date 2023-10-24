class RenameMessagesToGreetings < ActiveRecord::Migration[7.1]
  def change
    reversible do |t|
      t.up do
        rename_table :messages, :greetings
      end

      t.down do
        rename_table :greetings, :messages
      end
    end
  end
end
