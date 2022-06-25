import React from 'react';
import { Navbar, Rooms } from './style';
import { useState } from 'react';
const ChatRoom = () => {
    const [rooms, setRooms] = useState([]);
    const handleChatRoom = () => {};
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

export default ChatRoom;
