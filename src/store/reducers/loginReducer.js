import { USERNAME_CHANGE, USERNAME_SEARCH_ERROR, USER_AUTHENTICATED_CHANGE } from './../actions/appActions';

const INITIAL_STATE = {
    username: '',
    error: '',
    isAuthenticated: false
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
        default:
            return state;
    }
}