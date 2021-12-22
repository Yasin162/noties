class User < ApplicationRecord
    has_secure_password

    validates :username, :password, :password_confirmation, presence: true
    validates_uniqueness_of :username
    has_many :likes
    has_many :likesnote, :through => :likes
    has_many :notes

    # def more_than_two_notes
    #     user_notes = Notes.all
    #     if user_notes > 2
    #         render json: user_notes
    #     else
    #         render json: {error: "Has less than one note"}
    #     end
end
