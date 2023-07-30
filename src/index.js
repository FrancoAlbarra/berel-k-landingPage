import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initGoogleTagManager, logPageView } from './GoogleTagManager';
import { parse, serialize } from 'cookie';

const existingCookie = document.cookie;
const parsedCookie = parse(existingCookie);

// Establece los nuevos atributos de la cookie
const modifiedCookie = {
  ...parsedCookie,
  SameSite: 'None',
  Secure: true,
};

// Serializa la cookie modificada
const updatedCookie = serialize('myCookieName', JSON.stringify(modifiedCookie));

// Establece la cookie modificada
document.cookie = updatedCookie;
initGoogleTagManager();
logPageView();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


