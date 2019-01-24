import axios from 'axios';

export default class GithubClient {
    constructor() {
        this.request = axios.create({
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getStarredRepositories(username) {
        return this.request.get(`https://api.github.com/users/${username}/starred`);
    }

    getUserInfo(username) {
        return this.request.get(`https://api.github.com/users/${username}`);
    }
}