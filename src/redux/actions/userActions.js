import { LOADING_UI, LOADING_USER, SET_USER, SET_ERRORS, CLEAR_ERRORS } from '../types'
import axios from 'axios'

export const loginUser = (loginCredentials) => (dispatch) => {
    dispatch({ type: LOADING_UI })

    axios.post('./login', loginCredentials)
    .then(res => {
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData())
        dispatch({ type: CLEAR_ERRORS })
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const signupUser  = (newUserLoginCredentials) => (dispatch) => {
    dispatch({ type: LOADING_UI })

    axios.post('./signup', newUserLoginCredentials)
    .then(res => {
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData())
        dispatch({ type: CLEAR_ERRORS })
    })
    .catch(err => {
        dispatch({
            tpye: SET_ERRORS,
            payload: err.response.data
        })
    })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', token)
    axios.defaults.headers.common['Authorization'] = FBIdToken
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios.get('/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}