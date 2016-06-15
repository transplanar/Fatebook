data = JSON.parse(File.read('db/stories_data.json'))
Story.destroy_all
Story.create!(data)

data = JSON.parse(File.read('db/pages_data.json'))
Page.destroy_all
Page.create!(data)
