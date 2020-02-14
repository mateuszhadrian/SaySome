import { SET_POSTS, LOADING_DATA, LOADING_UI, ADD_POST, DELETE_POST} from '../types'
import axios from 'axios';

export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/screams')
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
    axios.post('/scream', postContent)
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

export const deletePost = (screamId) => (dispatch) => {
    axios.delete(`/scream/${screamId}`)
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