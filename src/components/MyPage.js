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
            tagsSelected: [],
            alertOn: false,
        };
    }

    componentDidMount() {
        Promise.all([
            this.context.fetcher.getTags(),
            this.context.fetcher.getMyInfo(),
        ]).then(([tags, myInfo]) => {
            const {nickname, tags: tagIds, alertOn} = myInfo;
            const tagsSelected = tags.map(() => false);

            tagIds.map(tagId => tags.findIndex(({id}) => id === tagId)).forEach((idx) => {
                if (idx >= 0) tagsSelected[idx] = true;
            });

            this._setState({
                nickname,
                tags,
                tagsSelected,
                alertOn,
            });
        })
    }

    render() {
        return (
            <MyPageView
                nickname={this.state.nickname}
                tags={this.state.tags}
                tagsSelected={this.state.tagsSelected}
                alertOn={this.state.alertOn}
            />
        );
    }

    _setState(state) {
        this.setState({...this.state, ...state});
    }
}

export default wrap(MyPage);
