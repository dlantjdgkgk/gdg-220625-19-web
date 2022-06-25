import React from 'react';
import { Gnb } from './Gnb';

export function wrap(ElementConstructor) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <ElementConstructor />
                    <Gnb />
                </>
            );
        }
    }
}
