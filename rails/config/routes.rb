Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'user/registrations' }

  root to: "home#index"
end
