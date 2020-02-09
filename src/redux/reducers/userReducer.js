import { LOADING_USER, SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types'

const initialState = {
    loading: false,
    authenticated: false,
    credentials: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case SET_USER:
            return {
                ...state,
                loading: false,
                authenticated: true,
                ...action.payload
            }
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state;
    }
}