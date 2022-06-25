import React from 'react';

export class Map extends React.Component {
    constructor() {
        super();
        this._map = null;
        this._markers = {};
    }

    componentDidMount() {
        this._map = new window.kakao.maps.Map(document.getElementById('nearby-map'), {
            center: new window.kakao.maps.LatLng(this.props.lat, this.props.lng),
			level: 2,
            draggable: false,
            scrollwheel: false,
        });

        this._addMarkers(this.props.markers || []);
    }

    shouldComponentUpdate(props) {
        if (props.lat !== this.props.lat || props.lng !== this.props.lng) {
            this._map?.setCenter(new window.kakao.maps.LatLng(props.lat, props.lng));
        }

        const {notSame, add, remove} = this._checkMarkers(props.markers, this.props.markers);

        if (notSame) {
            this._addMarkers(add);
            remove.forEach(({id}) => {
                this._markers[id]?.setMap(null);
                delete this._markers[id];
            });
        }

        return false;
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

    _checkMarkers(markersA, markersB) {
        if (markersA.length === markersB.length) {
            return {
                notSame: false,
                add: [],
                remove: []
            };
        }
        
        const add = markersB.filter(mB => !this._markers[mB.id]);
        const remove = markersA.filter(mA => markersB.findIndex(mB => mB.id === mA.id) < 0);

        return {
            notSame: true,
            add,
            remove,
        }
    }

    _addMarkers(markers) {
        markers.forEach(({lat, lng, id}) => {
            const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(lat, lng),
                image: new window.kakao.maps.MarkerImage(
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgBrVZNchJREO7uN2VVdBGOgCcQk1jlTrLQJG6CJ0g4ga5M4oZhY342xhOEnCDJRkI2kF0WIHgC8QZm40+ceW33G4YaCDBg/KqAmvfefP3672sQUvB0t5r9Y8w6WPuQAOZ1zQJcA2I7tPays7PWnfQ+jttY2q3mgUwJgPMwEdhg4Epra+V4KgM5/yTjzT046RMzN5joVG5/acLwuy6FxmTCMMwR4oZ44s4xYkXWysMeDRjISTgMUV0Ws0osn3JzZ60BE6DveIhHaogBuhK25aQRHEkOUG5urfgwAySkPhCVnJGfPx53/FfOW4oPCLn/r+QK8dSXQigrRxTihAcLu9VNIjrSsDS3V5fhDljaO6+7vEioNLzOA5csQcBchLtC8uZ+XQWKBy5JRF+13JpbLwZu/+Tg4jUzFDgMPrbevTyddi/2wtPeERfyzrDU8q3LAPharkjmaJY9CfyZ/gSEBYkO5pxHiF9ukTCf9Ywfz7IXBGEjOgNZku+MPsRNlIR056a62dpefTPLnpRrXKLzBCm4mqA1Vyk6FBlB7Lc//C9Y67hUFCX00NUHZpsfPqe6lMY16oz0lMurKi4FlnslRuvJQwt7tZKZu9/WMoZx5CovcmZx7/xwwECvr1TOyQmTCpuUnJPoGGy/adurPi3u1zaGb619YIxpO3mRmyaNRgqLDeX2IjLpPl2Muq+hS5931ioL7z9lyPNKsl9ZPLg4RIaOHM6INGdZq0/yh9YWRRL6peq5vuB+X/XVdGm/pgJVACS/+fZ5eSAMBCKE9Egf3X1EMYX4OPj96zBWTcchYRVGX4xXpHyLAwZyH+oZc3PTc3nQyDTokw/NhPEDR2IY2LCYNnOTo3XiwBkRkl5io5mrUpIcmVLjzyQnhXi0CvmpDJpiMmQjDcRwMyIxc8ciZbQipEA9UsVF5BwB9f622Gtm7NyTikuTi7/mU4K594AwVwAAAABJRU5ErkJggg==',
                    new window.kakao.maps.Size(23, 23),
                    {
                        offset: new window.kakao.maps.Point(0, 0),
                        alt: "마커 이미지 예제",
                        shape: "poly",
                        coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
                    }
                )
            });

            marker.setMap(this._map);
            this._markers[id] = marker;
        });
    }
}