class Note < ApplicationRecord
    validates :text, presence: true
    has_many :likes
    has_many :users, :through => :likes
    belongs_to :user

    # create a joined table between the user and note.
    # like note
end
 