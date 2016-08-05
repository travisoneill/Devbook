Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :posts, only: [:create, :update, :destroy, :index]
    resources :requestings, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :index, :show]
    resources :comments, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  get '/api/posts/timeline/:id', to: 'api/posts#timeline'

  get '/api/search/:query', to: 'api/searchables#search'

  get '/api/users/button/:id1/:id2', to: 'api/users#button'

  get '/api/friends/:id', to: 'api/users#friends'

  get '/api/incoming/:id', to: 'api/users#incoming'

  get 'api/mutual/:id1/:id2', to: 'api/users#mutual'

  get 'api/relations/:id', to: 'api/sessions#relation'

  delete '/api/requestings/:id1/:id2', to: 'api/requestings#destroy'

  post 'api/friendships/:id1/:id2', to: 'api/friendships#create'

  delete 'api/friendships/:id1/:id2', to: 'api/friendships#destroy'

end
