# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160705191856) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "branches", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "destination_id"
    t.string  "choice_text"
    t.integer "story_id"
  end

  add_index "branches", ["story_id"], name: "index_branches_on_story_id", using: :btree

  create_table "pages", force: :cascade do |t|
    t.text     "title"
    t.text     "summary"
    t.text     "content"
    t.integer  "parent_id"
    t.string   "choice_text"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "story_id"
    t.boolean  "complete",    default: false
  end

  add_index "pages", ["story_id"], name: "index_pages_on_story_id", using: :btree

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "summary"
    t.string "keywords"
    t.string "system"
    t.float  "rating"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "branches", "stories"
  add_foreign_key "pages", "stories"
end
