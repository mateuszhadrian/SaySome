import { SET_POSTS, LOADING_DATA, LOADING_UI, ADD_POST, DELETE_POST, SHOW_BUTTON, HIDE_BUTTON, LIKE_POST, UNLIKE_POST } from '../types'
import axios from 'axios';

export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/screams')
    .then(res =>{
    dispatch({ 
        type: SET_POSTS,
        payload: res.data
        })
    })
    .catch(() => {
        dispatch({
            type: SET_POSTS,
            payload: []
        })
    })
}

export const addPost = (postContent) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream', postContent)
    .then(res => {
        dispatch({ 
            type: ADD_POST,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.code)
    })
}

export const likePost = (screamId) => (dispatch) => {
    axios.get(`https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream/${screamId}/like`)
    .then(res => {
        dispatch({
            type: LIKE_POST,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const unlikePost = (screamId) => (dispatch) => {
    axios.get(`https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream/${screamId}/unlike`)
    .then(res => {
        dispatch({
            type: UNLIKE_POST,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const deletePost = (screamId) => (dispatch) => {
    axios.delete(`https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream/${screamId}`)
    .then(() => {
        dispatch({
            type: DELETE_POST,
            payload: screamId
        })
    })
    .catch(err => {
        console.log(err.code)
    })
}

export const hideAddPostButton = () => (dispatch) => {
    dispatch({ type: HIDE_BUTTON })
}

export const showAddPostButton = () => (dispatch) => {
    dispatch({ type: SHOW_BUTTON })
}
