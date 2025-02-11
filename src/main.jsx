import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-jplh2ofhtmydlk0f.us.auth0.com"
    clientId="iQeOMvngo15uO7mu6P7203h0xCbc5KtK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)


