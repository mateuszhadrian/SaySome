import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import home from './pages/home'

import './Normalize.css'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={home}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
