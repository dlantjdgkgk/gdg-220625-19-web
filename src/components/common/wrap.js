import React from 'react';
import { Gnb } from './Gnb';

export function wrap(
    ElementConstructor,
    { disableGnb } = { disableGnb: false }
) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <ElementConstructor />
                    {!disableGnb && <Gnb />}
                </>
            );
        }
    };
}
