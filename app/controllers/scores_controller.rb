class ScoresController < ApplicationController

    def create
        score = Score.create!(score_params)
        render json: score, status: :created
    end

    # could be used for a high score table
    def index
        render json: Score.all
    end


    private

    def score_params
        params.permit(:win, :user_id)
    end
end
