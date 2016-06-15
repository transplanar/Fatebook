class Branch < ActiveRecord::Base
  belongs_to :story
  belongs_to :page
end
