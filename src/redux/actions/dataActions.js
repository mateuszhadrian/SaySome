import { SET_POSTS, LOADING_DATA } from '../types'
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