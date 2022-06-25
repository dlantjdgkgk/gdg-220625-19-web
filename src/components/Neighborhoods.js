import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts';
import { wrap } from './common/wrap';
import { NeighborhoodsView } from './views/NeighborhoodsView';

const GEO_STATUS = {
    INIT: 'INIT',
    ALLOWED: 'ALLOWED',
    NOT_ALLOWED: 'NOT_ALLOWED',
};

class Neighborhoods extends React.Component {
    static contextType = AppContext;

    constructor() {
        super();
        this.state = {
            lat: 0,
            lng: 0,
            geoStatus: GEO_STATUS.INIT,
            neighborhoods: [],
            chatId: '',
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            this._handleGetGeoLocationSuccess,
            this._handleGetGeoLocationFail,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    }

    render() {
        return (
            <>
                <NeighborhoodsView
                    neighborhoods={this.state.neighborhoods}
                    onClickMember={(memberId) => this._createChatRoom(memberId)}
                />
                {this.state.chatId && <Navigate to={`/chatroom/${this.state.chatId}`} replace={false} />}
            </>
        );
    }

    _setState(state) {
        this.setState({...this.state, ...state});
    }

    _handleGetGeoLocationSuccess = async ({coords}) => {
        const {latitude, longitude} = coords;
            
        this._setState({
            ...this.state,
            lat: latitude,
            lng: longitude,
            geoStatus: GEO_STATUS.ALLOWED
        });
        const {result} = await this.context.fetcher.getNeighborhoods({lat: latitude, lng: longitude});
        this._setState({
            ...this.state,
            latitude,
            longitude,
            neighborhoods: result
        });
    }

    _handleGetGeoLocationFail = () => {
        this._setState({
            ...this.state,
            lat: 0,
            lng: 0,
            geoStatus: GEO_STATUS.NOT_ALLOWED,
        });
    }

    async _createChatRoom(memberId) {
        try {
            const {chatId} = await this.context.fetcher.createChatRoom({memberId});
            this._setState({chatId});
        } catch (err) {
            // no-spec
        }
    }
}

export default wrap(Neighborhoods);
