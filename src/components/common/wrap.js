import React from 'react';
import styled from 'styled-components';
import { Gnb } from './Gnb';

const Wrap = styled.div`
width: 100%;
height: 100vh;
`;

export function wrap(ElementConstructor) {
    return class extends React.Component {
        render() {
            return (
            <Wrap>
                <ElementConstructor />
                <Gnb />
            </Wrap>
            );
        }
    }
}
