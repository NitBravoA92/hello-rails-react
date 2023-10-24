class Api::V1::GreetingsController < ActionController::API
  # get a random greeting
  def random_greeting
    greeting = Greeting.order('RANDOM()').first
    render json: { message: greeting.text }
  end
end
