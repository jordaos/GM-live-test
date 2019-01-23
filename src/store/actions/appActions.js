import { USERNAME_CHANGE, USERNAME_SEARCH_ERROR } from '../types';

export const usernameChange = username => ({
    type: USERNAME_CHANGE,
    payload: username
});

export const loginError = error => ({
    type: USERNAME_SEARCH_ERROR,
    payload: error
});