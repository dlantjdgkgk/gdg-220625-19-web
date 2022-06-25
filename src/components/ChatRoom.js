import React, { useState, useEffect } from 'react';
import { MypageNavBar, SendText, Chat } from './style';
import { wrap } from './common/wrap';
import axios from 'axios';

const ChatRoomFunction = () => {
    const [sendText, setSendText] = useState('');
    const [receiveText, setReceiveText] = useState('');
    const onChange = (e) => {
        setSendText(e.target.value);
    };
    const handleBack = () => {};

    const SendTextAPI = async () => {
        const payload = {
            sendText: sendText,
        };
        const response = await axios.post('', payload);
        console.log(response);
    };

    const appendAPI = async () => {
        await axios
            .get('')
            .then((res) => {
                setReceiveText(res.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSendText = () => {
        SendTextAPI();
    };

    useEffect(() => {
        appendAPI();
    }, []);
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
                        value={sendText}
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
