Rails.application.routes.draw do
  resources :pages
  resources :stories
  # resources :users, only: [:new, :show, :create, :update, :destroy]
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  resources :branches, only: [:index, :destroy]

  get 'branches/find_by_destination/:id' => 'branches#find_by_destination'
  get 'published_stories' => 'stories#published_stories'
  get 'my_drafts/:user_id' => 'stories#owned_drafts'

  get '/pages/get_first_page/:story_id' => 'pages#get_first_page'

  root 'landing#index'

#  TODO change this
  get "*unmatched_route" => 'landing#index'

  # NOTE more correct than landing?
  # root to: 'application#angular'
end
