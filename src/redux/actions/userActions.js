import { LOADING_UI, LOADING_USER, SET_USER, SET_ERRORS, CLEAR_ERRORS, SET_UNAUTHENTICATED } from '../types'
import axios from 'axios'

export const loginUser = (loginCredentials) => (dispatch) => {
    dispatch({ type: LOADING_UI })

    axios.post('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/login', loginCredentials)
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

    axios.post('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/signup', newUserLoginCredentials)
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

export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user/image', formData)
    .then(res => {
        dispatch(getUserData())
    })
    .catch(err => console.log(err))
}

export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios.post('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user', userDetails)
    .then(() => {
        dispatch(getUserData())
    })
    .catch(err => console.log(err)) 
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED
    })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', token)
    axios.defaults.headers.common['Authorization'] = FBIdToken
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios.get('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user')
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

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}