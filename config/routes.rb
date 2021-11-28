Rails.application.routes.draw do
  resources :users, only: [:create]

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
