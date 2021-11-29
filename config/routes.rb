Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
