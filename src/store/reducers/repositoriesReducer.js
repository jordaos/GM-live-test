import { REPOSITORIES_LIST_CHANGE } from '../types';

const INITIAL_STATE = {
    repositories: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPOSITORIES_LIST_CHANGE:
            return {
                ...state, 
                repositories: action.payload
            };
        default:
            return state;
    }
}