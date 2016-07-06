class Requesting < ActiveRecord::Base
  belongs_to :user, class_name: "User", foreign_key: :recipient_id
  belongs_to :user, class_name: "User", foreign_key: :recipient_id
end
