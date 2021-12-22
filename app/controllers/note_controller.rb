class NoteController < ApplicationController
    before_action :authorize
    def index
        note = current_user.notes.all
        render json: note
    end
    
    def create
        binding.pry
        note = current_user.notes.create(note_params)
        if note.valid?
            render json: note
        else
            render json: {error: "something went wrong"}
        end
     end

        def update
            note = current_user.notes.find_by(id: params[:id])
            note.update(text: params[:text])
            render json: note
        end

        def destroy
            note = current_user.notes.find_by(id: params[:id])
            if note
            note.destroy
            else
                "could not find note"
            end
        end
        
        def show 
            note = current_user.notes.find_by(id: params[:id])
            if note
            render json: note
        else
            render json: {error: "something went wrong"}, status: :unauthorized
        end
        end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def note_params 
        params.permit(:text)
    end

    def authorize
       return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
