Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  post "/signup", to: "user#create"
  get "/me", to: "user#show"

  resources :note
end
