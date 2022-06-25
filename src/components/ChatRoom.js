import React, { useState } from 'react';
import { Navbar, SendText, Chat } from './style';
import { wrap } from './common/wrap';
import axios from './axios';

const ChatRoomFunction = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const handleSendText = () => {};
    return (
        <>
            <Navbar>
                <h1>채팅방 이름</h1>
                <div></div>
            </Navbar>
            <Chat>
                <div className='chatWrapper'>
                    <div className='sendContent'></div>
                    <div className='receiveContent'></div>
                </div>
            </Chat>
            <SendText>
                <input
                    type='text'
                    onChange={onChange}
                    value={text}
                    placeholder='채팅 메세지를 입력해주세요'
                ></input>
                <button onClick={handleSendText}></button>
            </SendText>
        </>
    );
};
class ChatRoom extends React.Component {
    render() {
        return <ChatRoomFunction />;
    }
}

export default wrap(ChatRoom, { disableGnb: true });
