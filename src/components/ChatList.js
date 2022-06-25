import React from 'react';
import { Navbar, SendText, Chat } from './style';

const ChatList = () => {
    const handleSendText = () => {};
    return (
        <>
            <Navbar>
                <h1>채팅방 이름</h1>
            </Navbar>
            <Chat>
                <div className='chatWrapper'>
                    <div className='chatContent'></div>
                </div>
            </Chat>
            <SendText>
                <input type='text'></input>
                <button onClick={handleSendText}></button>
            </SendText>
        </>
    );
};

export default ChatList;
