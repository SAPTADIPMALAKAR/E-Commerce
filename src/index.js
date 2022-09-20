import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'normalize.css/normalize.css';
import { ThemeContextProvider } from './contexts/ThemeContext.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
