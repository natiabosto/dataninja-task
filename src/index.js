import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalState from './context/GlobalState';

const app = (
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));