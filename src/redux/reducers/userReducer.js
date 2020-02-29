import { LOADING_USER, SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED, LIKE_POST, UNLIKE_POST } from '../types'

const initialState = {
    loading: false,
    authenticated: false,
    credentials: {},
    likes: [],
    errors: {}
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
        case LIKE_POST:
            return {
                ...state,
                likes: [
                    ...state.likes,
                    {
                        userHandle: state.credentials.handle,
                        screamId: action.payload.screamId
                    }
                ]
            }
            case UNLIKE_POST:
                return {
                    ...state,
                    likes: state.likes.filter(like => like.screamId !== action.payload.screamId)
                }
        default:
            return state;
    }
}