import { SET_POSTS, LOADING_DATA, ADD_POST, DELETE_POST, HIDE_BUTTON, SHOW_BUTTON, LIKE_POST, UNLIKE_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false,
    button: true,
    options: true
}

export default function(state = initialState, action){
    
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload,
                ...state.posts
                ]
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case DELETE_POST:
            const posts = state.posts.filter( post => post.screamId !== action.payload)
            return {
                ...state,
                posts 
            }
        case HIDE_BUTTON:
            return {
                ...state,
                button: false
            }
        case SHOW_BUTTON:
            return {
                ...state,
                button: true
            }
        case LIKE_POST:
        case UNLIKE_POST:
            let index = state.posts.findIndex(post => post.screamId === action.payload.screamId)
            state.posts[index] = action.payload
            return {
                ...state
            }
        default:
            return state;
    }
}