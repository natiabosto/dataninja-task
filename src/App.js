import React from 'react';
import { Dashboard, Login } from './pages'
import { isAuthorised } from './utils'

function App() {
  return isAuthorised() ? <Dashboard /> : <Login />
}

export default App;
