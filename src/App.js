import styled from 'styled-components';
import ChatRoom from '../src/components/ChatRoom';
import ChatList from '../src/components/ChatList';
import React from 'react';

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
`;

function App() {
    return (
        <Wrap>
            {/* <ChatRoom /> */}
            <ChatList />
        </Wrap>
    );
}

export default App;
