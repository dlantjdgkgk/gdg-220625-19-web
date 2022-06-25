import React from 'react';
import {wrap} from './common/wrap';

class MyPage extends React.Component {
    render() {
        return (
            <div>My Page</div>
        );
    }
}

export default wrap(MyPage);
