class UserController < ApplicationController
    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find_by( id: session[:user_id])
        if user 
            render json: user
        else
            render json: {error: "Not signed in or need to signup"}, status: :unauthorized
        end


    end

    # def more_than_two_notes
    #     user_notes = Notes.all
    #     if user_notes > 2
    #         render json: user_notes
    #     else
    #         render json: {error: "Has less than one note"}
    #     end
    # end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
