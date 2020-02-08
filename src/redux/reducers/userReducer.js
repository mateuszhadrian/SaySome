import { LOADING_USER, SET_USER } from '../types'

const initialState = {
    laoding: false,
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
                authenticated: true,
                ...action.payload
            }
        default:
            return state;
    }
}