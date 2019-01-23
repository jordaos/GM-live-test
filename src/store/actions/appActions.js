import { USERNAME_CHANGE } from '../types';

export const usernameChange = username => ({
    type: USERNAME_CHANGE,
    payload: username
});