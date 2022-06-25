import styled from 'styled-components';
import { mainLogo } from '../../assets/mainLogo';

const Background = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: #3489B9;
`;

const Center = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export function EntryLoading() {
    return (
        <Background>
            <Center dangerouslySetInnerHTML={{ __html: mainLogo }} />
        </Background>
    );
}
