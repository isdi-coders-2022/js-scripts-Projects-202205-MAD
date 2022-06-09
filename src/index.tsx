import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CharacterContextProvider } from './context/character.provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="dev-ineuvml0.us.auth0.com"
        clientId="Nd6XphhyswrZQYwiqn3e1GbC1fALjdUJ"
        redirectUri={'http://localhost:3000'}
    >
        <React.StrictMode>
            <CharacterContextProvider>
                <App />
            </CharacterContextProvider>
        </React.StrictMode>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
