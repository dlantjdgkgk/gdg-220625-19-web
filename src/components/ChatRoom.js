import React, { useState } from 'react';
import { MypageNavBar, SendText, Chat } from './style';
import { wrap } from './common/wrap';
import axios from 'axios';

const ChatRoomFunction = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const handleBack = () => {};
    const loginAPI = async () => {
        const payload = {
            text: text,
        };
        const response = await axios.post(
            'https://api.digital-hamster.net/login',
            payload
        );
        console.log(response);
    };

    const handleSendText = () => {
        loginAPI();
    };
    return (
        <>
            <MypageNavBar>
                <button onClick={handleBack}>
                    <img src='img/back.png'></img>
                    <h1>라라</h1>
                </button>
            </MypageNavBar>
            <Chat>
                <div className='chatWrapper'>
                    <div className='chat'>
                        <div className='sendContent'>dddddd</div>
                    </div>
                    <div className='chat'>
                        <div className='receiveContent'>asd</div>
                    </div>
                </div>
            </Chat>
            <SendText>
                <form method='post' onSubmit={handleSendText}>
                    <input
                        type='text'
                        onChange={onChange}
                        value={text}
                        placeholder='채팅 메세지를 입력해주세요'
                    ></input>
                </form>
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
