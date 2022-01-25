class User < ApplicationRecord
    has_secure_password
    has_many :scores

    validates :username, uniqueness: true
end
