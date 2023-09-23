import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "aos/dist/aos.css";
import 'react-calendar/dist/Calendar.css';
import { AuthUserProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthUserProvider >
      <App />
      </AuthUserProvider>
  </React.StrictMode>
);


