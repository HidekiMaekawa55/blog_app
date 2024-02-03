class CreateBlogs < ActiveRecord::Migration[7.1]
  def up
    unless data_source_exists?(:blogs)
      create_table :blogs, id: :integer do |t|
        t.string :title, null: false
        t.text :content, null: false
        t.timestamps null: false
      end
    end
  end

  def down
    if data_source_exists?(:blogs)
      drop_table :blogs
    end
  end
end
