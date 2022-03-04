import * as Constants from '../actions/Constants';

const initialState = {
    user: null, authStatus: null, isblocked: null, roles: [], languages: [],
    errorMessage: "", signupStatus: false, emailExist: false
};


export default (state = initialState, action) => {
    switch (action.type) {

        case Constants.SIGN_IN_SUCCESS: {
            return { ...state, ...action.payload }
        }
        case Constants.SIGN_UP_SUCCESS: {
            return { ...state, ...action.payload, errorMessage: "" }
        }
        case Constants.SIGN_UP_FAILURE: {
            return { ...state, errorMessage: action.payload, signupStatus: false, emailExist: false }
        }
        case Constants.CLEAR_SIGNUP: {
            return { ...state, errorMessage: "", signupStatus: false, emailExist: false }
        }
        case Constants.LOG_OUT: {
            return { ...initialState }
        }
        case Constants.FETCH_LANGUAGES_SUCCESS: {
            return { ...state, languages: action.payload }
        }
        case Constants.FETCH_ROLES_SUCCESS: {
            return { ...state, roles: action.payload }
        }
        default:
            return state;
    }
};