Rails.application.routes.draw do
  resources :stories
  resources :pages
   root 'stories#index'
  resources :stories
end
