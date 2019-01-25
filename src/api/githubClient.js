import axios from 'axios';

const request = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export function getStarredRepositories(username) {
    return request.get(`https://api.github.com/users/${username}/starred`);
}

export function getUserInfo(username) {
    return request.get(`https://api.github.com/users/${username}`);
}