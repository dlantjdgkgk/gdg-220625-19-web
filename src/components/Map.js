import React from 'react';

export class Map extends React.Component {
    constructor() {
        super();
        this._map = null;
    }

    componentDidMount() {
        this._map = new window.kakao.maps.Map(document.getElementById('nearby-map'), {
            center: new window.kakao.maps.LatLng(this.props.lat, this.props.lng),
			level: 2,
            draggable: false,
            scrollwheel: false,
        });
    }

    render() {
        return (
            <div
                id="nearby-map"
                style={{
                    width: `${this.props.width}px`,
                    height: `${this.props.height}px`,
                    margin: '30px 0 60px',
                    borderRadius: '18px'
                }} />
        );
    }
}