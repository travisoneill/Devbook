require_relative '../app/controllers/api/users_controller.rb'
require_relative '../app/models/user.rb'

seeds = [
  { fname: "Administrator", lname: ".", email: "your thoughts", password: "let there be light" },
  { fname: "Charles", lname: "Babbage", email: "telegraph", password: "password" },
  { fname: "Alan", lname: "Turing", email: "captcha@gmail.com", password: "password" },
  { fname: "Al", lname: "Gore", email: "inventor@darpa.gov", password: "password" },
  { fname: "Bill", lname: "Gates", email: "founder@apple.com", password: "password" },
  { fname: "Steve", lname: "Jobs", email: "founder@microsoft.com", password: "password" },
  { fname: "Sergey", lname: "Brin", email: "founder@google.com", password: "password" },
  { fname: "Robert');", lname: "DROP TABLE users;--", email: "bobbytables@gmail.com", password: "password" }
]

seeder = Api::UsersController.new

seeds.each do |seed|
  seeder.user = User.new(seed)
  seeder.create
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.create!({ fname: "Administrator", lname: ".", email: "your thoughts", password: "let there be light" })
# User.create!({ fname: "Charles", lname: "Babbage", email: "telegraph", password: "password" })
# User.create!({ fname: "Alan", lname: "Turing", email: "captcha@gmail.com", password: "password" })
# User.create!({ fname: "Al", lname: "Gore", email: "inventor@darpa.gov", password: "password" })
# User.create!({ fname: "Bill", lname: "Gates", email: "founder@apple.com", password: "password" })
# User.create!({ fname: "Steve", lname: "Jobs", email: "founder@microsoft.com", password: "password" })
# User.create!({ fname: "Sergey", lname: "Brin", email: "founder@google.com", password: "password" })

# class Seeds
#
#   def self.get_seeds
#   [
#     { fname: "Administrator", lname: ".", email: "your thoughts", password: "let there be light" },
#     { fname: "Charles", lname: "Babbage", email: "telegraph", password: "password" },
#     { fname: "Alan", lname: "Turing", email: "captcha@gmail.com", password: "password" },
#     { fname: "Al", lname: "Gore", email: "inventor@darpa.gov", password: "password" },
#     { fname: "Bill", lname: "Gates", email: "founder@apple.com", password: "password" },
#     { fname: "Steve", lname: "Jobs", email: "founder@microsoft.com", password: "password" },
#     { fname: "Sergey", lname: "Brin", email: "founder@google.com", password: "password" }
#   ]
#   end
# end
