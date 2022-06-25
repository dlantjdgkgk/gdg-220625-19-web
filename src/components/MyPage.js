import React from 'react';
import { AppContext } from '../contexts';
import { wrap } from './common/wrap';
import { MyPageView } from './views/MyPageView';

class MyPage extends React.Component {
    static contextType = AppContext;

    constructor() {
        super();
        this.state = {
            nickname: '',
            tags: [],
            tagIndex: -1,
            alertOn: false,
        };
    }

    componentDidMount() {
        Promise.all([
            this.context.fetcher.getTags(),
            this.context.fetcher.getMyInfo(),
        ]).then(([tags, myInfo]) => {
            const {nickname, tag: tagId, alertOn} = myInfo;
            const tagIndex = tags.findIndex(({id}) => id === tagId);

            this._setState({
                nickname,
                tags,
                tagIndex,
                alertOn,
            });
        })
    }

    render() {
        return (
            <MyPageView
                nickname={this.state.nickname}
                tags={this.state.tags}
                tagIndex={this.state.tagIndex}
                alertOn={this.state.alertOn}
                onSubmit={this._handleSubmit}
            />
        );
    }

    _setState(state) {
        this.setState({...this.state, ...state});
    }

    _handleSubmit = ({nickname, tagIndex, alertOn}) => {
        const tag = this.state.tags[tagIndex] || '';

        try {
            this.context.fetcher.modifyMyInfo({nickname, tag, alertOn});
            this._setState({nickname, alertOn, tagIndex});
        } catch (err) {

        }
    }
}

export default wrap(MyPage);
