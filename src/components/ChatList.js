import React, { useState, useEffect } from 'react';
import { Navbar, Rooms } from './style';
import { wrap } from './common/wrap';
import { useNavigate } from 'react-router-dom';
import axios from './axios';

const ChatListFunction = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();
    const chatId = 5;
    const handleChatRoom = () => {
        navigate('/chatroom/' + chatId);
    };
    useEffect(() => {}, []);
    return (
        <>
            <Navbar>
                <h1>방 목록</h1>
            </Navbar>
            <Rooms>
                <button onClick={handleChatRoom}></button>
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
