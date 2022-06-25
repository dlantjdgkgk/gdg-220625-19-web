import styled from 'styled-components';

const LoadingBar = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export function EntryLoading() {
    return (
        <LoadingBar />
    );
}
