import React, { useState, useEffect } from 'react';
import { Navbar, Rooms } from './style';
import { wrap } from './common/wrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChatListFunction = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();
    const chatId = 5;
    const handleChatRoom = () => {
        navigate('/chatroom/' + chatId);
    };

    const appendAPI = async () => {
        await axios
            .get('')
            .then((res) => {
                setRooms(res.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // useEffect(() => {
    //     appendAPI();
    // }, []);

    //채팅 닉네임 ,채팅 내용, 채팅 시간

    return (
        <>
            <Navbar>
                <h1>방 목록</h1>
            </Navbar>
            <Rooms>
                <button onClick={handleChatRoom}>
                    <div className='formation'>
                        <img src='/img/chicken.jpg' width='48' height='48' />
                        <div className='nameContent'>
                            <div className='chatNickName'>닉네임</div>
                            <div className='chatContent'>내용</div>
                        </div>
                    </div>
                    <div className='chatCreatedAt'>시간 </div>
                </button>
                {rooms.map((room, index) => {
                    return <button onClick={handleChatRoom}></button>;
                })}
            </Rooms>
            {/* <Toolbar></Toolbar> */}
        </>
    );
};

class ChatList extends React.Component {
    render() {
        return <ChatListFunction />;
    }
}
export default wrap(ChatList);
