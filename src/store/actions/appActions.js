import { USERNAME_CHANGE, USERNAME_SEARCH_ERROR, REPOSITORIES_LIST_CHANGE } from '../types';

export const usernameChange = username => ({
    type: USERNAME_CHANGE,
    payload: username
});

export const loginError = error => ({
    type: USERNAME_SEARCH_ERROR,
    payload: error
});

export const repositoriesListChange = repositoriesList => ({
    type: REPOSITORIES_LIST_CHANGE,
    payload: repositoriesList
});