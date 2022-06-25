import React from 'react';
import styled from 'styled-components';
import { loadingImage } from '../../assets/loadingImage';

const LoadingImage = styled.img`
display: block;
width: 140px;
margin: 0 auto;
transform: rotate(${props => props.degree}deg);
`;

export function Loading() {
    const [degree, setDegree] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            let nextDegree = degree + 20;

            if (nextDegree > 360) {
                nextDegree -= 360;
            }

            setDegree(nextDegree);
        }, 40);

        return () => {
            clearTimeout(timer);
        }
    }, [degree]);

    return (
        <LoadingImage src={loadingImage} degree={degree} />
    )
}