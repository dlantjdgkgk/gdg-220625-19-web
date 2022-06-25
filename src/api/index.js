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
        const {data} = await this.fetch({
            method: 'POST',
            url: this._origin + '/v1/members/search',
            data: {
                lat,
                lng,
            }
        });

        return data.result.map(({memberId, nickname, tag, lat, lng, distance}) => ({memberId, nickname, tag, lat, lng, distance}));
    }

    async getMyInfo() {
        const {data} = await this.fetch({
            method: 'GET',
            url: this._origin + '/v1/members/me',
        });
        const {nickname, tags, alertOn} = data;

        return {nickname, tags, alertOn};
    }

    async modifyMyInfo({nickname, tags, alertOn}) {
        const {data} = this.fetch({
            method: 'PUT',
            url: this._origin + '/v1/members/me',
            data: {nickname, tags, alertOn}
        });

        return data;
    }

    async getTags() {
        const {data} = this.fetch({
            method: 'GET',
            url: this._origin + '/v1/tags',
        });

        return data.result.map(({id, text}) => ({id, text}));
    }

    async createChatRoom({memberId}) {
        const {data} = this.fetch({
            method: 'POST',
            url: this._origin + '/v1/chat-rooms',
            data: {memberId}
        });

        return data;
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

            this.setAccessToken(accessToken);
        } catch (err) {
            this.setAccessToken(null);
        }
    }

    async updateCoordinate({lat, lng}) {
        return this.fetch({
            method: 'PUT',
            url: this._origin + '/v1/members/me/coordinate',
            data: {
                lat,
                lng,
            },
        });
    }
}
