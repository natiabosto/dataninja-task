import React from 'react';
import './App.css';
import { Dashboard, Login } from './components'
import { isAuthorised } from './utils'

function App() {
  return isAuthorised() ? <Dashboard /> : <Login />;
}

export default App;
