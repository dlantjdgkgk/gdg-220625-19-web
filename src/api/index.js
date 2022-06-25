import axios from 'axios';

export class Fetcher {
    constructor() {
        this._defaultConfig = {
            timeout: 3000,
            headers: {},
        };
    }

    setAccessToken(accessToken) {
        if (accessToken) {
            this._defaultConfig.headers.Authorization = `Bearer ${accessToken}`;
        } else {
            delete this._defaultConfig.headers.Authorization;
        }
    }

    async fetch(axiosConfig) {
        const config = {
            ...this._defaultConfig,
            ...axiosConfig,
            headers: {
                ...this._defaultConfig.headers,
                ...(axiosConfig.headers || {}),
            },
        };

        return axios(config);
    }
}

export class AppFetcher extends Fetcher {
    async getNeighborhoods({lat, lng}) {
        return this.fetch({
            method: 'POST',
            url: '/v1/members/search',
            data: {
                lat,
                lng,
            }
        });
    }

    async createChatRoom({memberId}) {
        return this.fetch({
            method: 'POST',
            url: '/v1/chat-rooms',
            data: {memberId}
        });
    }
}
