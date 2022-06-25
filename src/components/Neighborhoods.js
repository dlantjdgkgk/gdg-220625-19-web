import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts';
import { wrap } from './common/wrap';
import { Map } from './Map';
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
        this._geoWatchId = null;
        this.state = {
            lat: 0,
            lng: 0,
            geoStatus: GEO_STATUS.INIT,
            neighborhoods: [],
            chatId: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        this._geoWatchId = navigator.geolocation.watchPosition(
            this._handleGeoLocationPublishSuccess,
            this._handleGeoLocationPublishFail,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    }

    componentWillUnmount() {
        if (this._geoWatchId) {
            navigator.geolocation.clearWatch(this._geoWatchId);
            this._geoWatchId = null;
        }
    }

    render() {
        return (
            <>
                <NeighborhoodsView
                    neighborhoods={this.state.neighborhoods}
                    map={<Map lat={this.state.lat} lng={this.state.lng} width={window.innerWidth - 50} height={window.innerWidth - 50} />}
                    isLoading={this.state.isLoading}
                    onClickMember={(memberId) => this._createChatRoom(memberId)}
                />
                {this.state.chatId && <Navigate to={`/chatroom/${this.state.chatId}`} replace={false} />}
            </>
        );
    }

    _setState(state) {
        this.setState({...this.state, ...state});
    }

    async _setGeoState({lat, lng}) {
        if (this.state.lat !== lat || this.state.lng !== lng) {
            this.context.fetcher.updateCoordinate({lat, lng});
            this._setState({
                lat,
                lng,
                geoStatus: GEO_STATUS.ALLOWED
            });
            const result = await this.context.fetcher.getNeighborhoods({lat, lng});
            this._setState({
                neighborhoods: result,
                isLoading: false,
            });
        }
    }
    
    _handleGeoLocationPublishSuccess = async ({coords}) => {
        const {latitude, longitude} = coords;

        this._setGeoState({
            lat: latitude,
            lng: longitude,
        })
    }

    _handleGeoLocationPublishFail = () => {
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
