Rails.application.routes.draw do
  resources :pages
  resources :stories
  # resources :branches, only: [] do
  #   member do
  #     get :find_by_destination
  #   end
  # end
  get 'branches/find_by_destination/:id' => 'branches#find_by_destination'

  root 'landing#index'

  get "*unmatched_route" => 'landing#index'
  # root

  # NOTE more correct than landing?
  # root to: 'application#angular'
end
