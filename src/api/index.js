import axios from 'axios';
import { v1 as uuid } from 'uuid';

const UAT_KEY = 'uat';

export class Fetcher {
    constructor() {
        this._accessToken = localStorage.getItem(UAT_KEY) || null;
        this._defaultConfig = {
            timeout: 3000,
            headers: {},
        };
    }

    getAccessToken() {
        return this._accessToken;
    }

    setAccessToken(accessToken) {
        if (accessToken) {
            this._accessToken = accessToken;
            this._defaultConfig.headers.Authorization = `Bearer ${accessToken}`;
            localStorage.setItem(UAT_KEY, this._accessToken);
        } else {
            this._accessToken = null;
            delete this._defaultConfig.headers.Authorization;
            localStorage.setItem(UAT_KEY, '');
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
    constructor() {
        super();
        this._origin = 'http://localhost:4000';
    }

    async getNeighborhoods({lat, lng}) {
        const {result} = await this.fetch({
            method: 'POST',
            url: this._origin + '/v1/members/search',
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
            url: this._origin + '/v1/members/me',
        });

        return {nickname, tags, alertOn};
    }

    async modifyMyInfo({nickname, tags, alertOn}) {
        return this.fetch({
            method: 'PUT',
            url: this._origin + '/v1/members/me',
            data: {nickname, tags, alertOn}
        })
    }

    async getTags() {
        const {result} = this.fetch({
            method: 'GET',
            url: this._origin + '/v1/tags',
        });

        return result.map(({id, text}) => ({id, text}));
    }

    async createChatRoom({memberId}) {
        return this.fetch({
            method: 'POST',
            url: this._origin + '/v1/chat-rooms',
            data: {memberId}
        });
    }

    async signIn() {
        try {
            const {data} = await this.fetch({
                method: 'POST',
                url: this._origin + '/v1/members/login',
                data: {
                    uuid: uuid(),
                },
            });
            const {accessToken} = data;

            console.log(data, accessToken);

            this.setAccessToken(accessToken);
        } catch (err) {
            this.setAccessToken(null);
        }
    }
}
