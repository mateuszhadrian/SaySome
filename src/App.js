import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import home from './pages/home'

import './Normalize.css'
import './App.css';
import Navbar from './components/Navbar'
import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={home}/>
        </Switch>
    </Router>
    </Provider>
    </>
  );
}

export default App;
