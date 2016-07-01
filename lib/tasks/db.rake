namespace :db do
  desc "TODO"
  task clear: :environment do
    User.delete_all
    Searchable.delete_all
    Action.delete_all
  end

end
