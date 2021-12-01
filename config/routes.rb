Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/quiz', to: 'quizzes#create'
  post '/quiz/:id', to: 'quizzes#show'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
