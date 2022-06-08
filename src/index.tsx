import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="dev-ineuvml0.us.auth0.com"
        clientId="sV0pwr2jmJOOxQaLU86P7xaIJy8zIs5J"
        redirectUri={'http://localhost:3000/login'}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
