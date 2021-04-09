import React from 'react';
import './App.css';
import { Dashboard, Login } from './components'
import { isAuthorised } from './utils'
import GlobalState from './context/GlobalState';

function App() {
  return <GlobalState>{isAuthorised() ? <Dashboard /> : <Login />}</GlobalState>
}

export default App;
