data = JSON.parse(File.read('db/stories_data.json'))
Story.destroy_all
Story.create!(data)
