Rails.application.routes.draw do
  resources :pages
  resources :stories
  root 'landing#index'
  # root

  # NOTE more correct than landing?
  # root to: 'application#angular'
end
