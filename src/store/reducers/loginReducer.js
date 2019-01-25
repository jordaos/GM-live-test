import { USERNAME_CHANGE, USERNAME_SEARCH_ERROR } from './../actions/appActions';

const INITIAL_STATE = {
    username: '',
    error: ''
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
        default:
            return state;
    }
}