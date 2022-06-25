import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../../contexts';
import { Gnb } from './Gnb';
import { EntryLoading } from "./EntryLoading";

const Wrap = styled.div`
width: 100%;
height: 100vh;
`;

export function wrap(ElementConstructor) {
    return class extends React.Component {
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
            return this.state.isSignedIn ? (
                <Wrap>
                    <ElementConstructor />
                    <Gnb />
                </Wrap>
            ) : (
                <Wrap>
                    <EntryLoading />
                </Wrap>
            );
        }

        _signIn() {
            this.setState({...this.state, isSignedIn: true});
        }
    }
}
