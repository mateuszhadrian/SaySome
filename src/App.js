import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import AuthRoute from './utils/AuthRoute'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { logoutUser, getUserData } from './redux/actions/userActions'

import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

import './Normalize.css'
import './App.css';
import Navbar from './components/Navbar'
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';

const token = localStorage.FBIdToken

if (token) {
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
  } else {
    store.dispatch({
      type: SET_AUTHENTICATED
    })
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    store.dispatch(getUserData())
  }
}

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={home}/>
          <AuthRoute exact path="/logowanie" component={login}/>
          <AuthRoute exact path="/rejestracja" component={signup}/>
        </Switch>
    </Router>
    </Provider>
    </>
  );
}

export default App;
