Rails.application.routes.draw do
  root to: "pages#app"

  get '/activity', to: 'pages#activity'
  get '/tackle-box', to: 'pages#tackle_box'
end
