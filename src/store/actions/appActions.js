export const USERNAME_CHANGE = 'usernameChange';
export const USERNAME_SEARCH_ERROR = 'usernameSearchError';
export const REPOSITORIES_LIST_CHANGE = 'repositoriesListChange';
export const USER_AUTHENTICATED_CHANGE = 'userAuthenticatedChange';

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

export const userAuthenticatedChange = isAuthenticated => ({
    type: USER_AUTHENTICATED_CHANGE,
    payload: isAuthenticated
});