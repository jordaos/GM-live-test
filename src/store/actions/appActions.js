export const USERNAME_CHANGE = 'usernameChange';
export const USERNAME_SEARCH_ERROR = 'usernameSearchError';
export const REPOSITORIES_LIST_CHANGE = 'repositoriesListChange';

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