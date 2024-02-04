Rails.application.routes.draw do
  resources :blogs, only: [:index, :create, :update, :destroy]
end
