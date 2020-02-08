import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from '../types'

const initialState = {
    loading: false,
    errors: null
}

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            }
        default: 
            return state;
    }
}