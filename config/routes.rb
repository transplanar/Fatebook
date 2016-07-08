Rails.application.routes.draw do
  resources :pages
  resources :stories
  resources :users, only: [:new, :create, :destroy]
  resources :sessions, only: [:new, :create, :destroy]
  # resources :branches, only: [] do
  #   member do
  #     get :find_by_destination
  #   end
  # end
  get 'branches/find_by_destination/:id' => 'branches#find_by_destination'
  get 'published_stories' => 'stories#published_stories'
  get 'my_drafts/:user_id' => 'stories#owned_drafts'

  root 'landing#index'

  get "*unmatched_route" => 'landing#index'
  # root

  # NOTE more correct than landing?
  # root to: 'application#angular'
end
