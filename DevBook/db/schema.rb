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

ActiveRecord::Schema.define(version: 20160629040921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.integer  "initiator_id", null: false
    t.integer  "recipient_id"
    t.string   "type",         null: false
    t.string   "subtype"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "actions", ["initiator_id"], name: "index_actions_on_initiator_id", using: :btree
  add_index "actions", ["recipient_id"], name: "index_actions_on_recipient_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id1",   null: false
    t.integer  "user_id2",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friendships", ["user_id1", "user_id2"], name: "index_friendships_on_user_id1_and_user_id2", unique: true, using: :btree

  create_table "requests", force: :cascade do |t|
    t.integer  "initiator_id", null: false
    t.integer  "recipient_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "searchables", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "fname",      null: false
    t.string   "lname",      null: false
    t.string   "fullname",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "full_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "dob"
    t.string   "profile_pic_url"
    t.string   "cover_pic_url"
    t.string   "gender"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["fname"], name: "index_users_on_fname", using: :btree
  add_index "users", ["lname"], name: "index_users_on_lname", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
