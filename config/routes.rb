Rails.application.routes.draw do
  resources :pages
  resources :stories
  resources :branches
  root 'landing#index'

  get "*unmatched_route" => 'landing#index'
  # root

  # NOTE more correct than landing?
  # root to: 'application#angular'
end
