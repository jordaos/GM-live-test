import { USERNAME_CHANGE, USERNAME_SEARCH_ERROR, USER_AUTHENTICATED_CHANGE, LOGIN_BUTTON_CLICK } from './../actions/appActions';

const INITIAL_STATE = {
    username: '',
    error: '',
    isAuthenticated: false,
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGE:
            return {
                ...state, 
                username: action.payload
            };
        case USERNAME_SEARCH_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case USER_AUTHENTICATED_CHANGE:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case LOGIN_BUTTON_CLICK:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}