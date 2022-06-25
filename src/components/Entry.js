import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts';
import { EntryLoading } from "./common/EntryLoading";

const Wrap = styled.div`
width: 100%;
height: 100vh;
`;

export class Entry extends React.Component {
    static contextType = AppContext;

    constructor() {
        super();
        this.state = {
            isSignedIn: false,
        };
    }

    componentDidMount() {
        if (this.context.fetcher.getAccessToken()) {
            setTimeout(() => this._signIn(), 1000);
        } else {
            Promise.all([
                this.context.fetcher.signIn(),
                new Promise(resolve => setTimeout(resolve, 1000)),
            ]).then(() => {
                this.context.fetcher.getAccessToken() && this._signIn();
            });
        }
    }

    render() {
        return (
            <Wrap>
                {this.state.isSignedIn ? this.props.children : <EntryLoading />}
            </Wrap>
        );
    }

    _signIn() {
        this.setState({...this.state, isSignedIn: true});
    }
}