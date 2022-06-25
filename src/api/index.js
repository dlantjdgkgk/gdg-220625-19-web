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

/**
 * @see
 * 시간 이슈로 서버 스키마와 클라이언트 스키마를 일치시키는 시간을 줄이기 위해
 * 불필요한 연산일 수도 있는데 모델 변환작업을 진행한다.
 */
export class AppFetcher extends Fetcher {
    async getNeighborhoods({lat, lng}) {
        const {result} = await this.fetch({
            method: 'POST',
            url: '/v1/members/search',
            data: {
                lat,
                lng,
            }
        });

        return result.map(({memberId}) => ({memberId}))
    }

    async getMyInfo() {
        const {nickname, tags, alertOn} = await this.fetch({
            method: 'GET',
            url: '/v1/members/me',
        });

        return {nickname, tags, alertOn};
    }

    async modifyMyInfo({nickname, tags, alertOn}) {
        return this.fetch({
            method: 'PUT',
            url: '/v1/members/me',
            data: {nickname, tags, alertOn}
        })
    }

    async getTags() {
        const {result} = this.fetch({
            method: 'GET',
            url: '/v1/tags',
        });

        return result.map(({id, text}) => ({id, text}));
    }

    async createChatRoom({memberId}) {
        return this.fetch({
            method: 'POST',
            url: '/v1/chat-rooms',
            data: {memberId}
        });
    }
}
