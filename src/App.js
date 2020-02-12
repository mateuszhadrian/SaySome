import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import AuthRoute from './utils/AuthRoute'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { logoutUser, getUserData } from './redux/actions/userActions'
import AddPostWindow from './components/AddPostWindow'

import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import profile from './pages/profile'

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

class App extends Component {
    state = {
      show: false
    }

    showAddPostWindow = () => {
      this.setState({
        show: true
      })
    }

    hideAddPostWindow = () => {
      this.setState({
        show: false
      })
    }

  render(){

    const addPostWindow = this.state.show ? (
      <AddPostWindow hideAddPostWindow={this.hideAddPostWindow}/>
    ) : (
      null
    )
    
    return (
      <>
      <Provider store={store}>
      <Router>
        <Navbar showAddPostWindow={this.showAddPostWindow}/>
        {addPostWindow}
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/logowanie" component={login}/>
            <AuthRoute exact path="/rejestracja" component={signup}/>
            <Route exact path="/profil" component={profile}/>
          </Switch>
      </Router>
      </Provider>
      </>
    );
  } 
}

export default App;
