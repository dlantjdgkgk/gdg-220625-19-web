import React, { useState, useEffect } from 'react';
import { Navbar, Rooms, RoomLink } from './style';
import { wrap } from './common/wrap';
import axios from 'axios';

const ChatListFunction = () => {
    const [rooms, setRooms] = useState([]);

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
                <h1>채팅</h1>
            </Navbar>
            <Rooms>
                <RoomLink to={`/chatroom/${'1'}`}>
                    {rooms.map((room, index) => {
                        return (
                            <>
                                <div className='formation'>
                                    <img
                                        src='/img/chicken.jpg'
                                        width='48'
                                        height='48'
                                    />

                                    <div className='nameContent'>
                                        <div className='chatNickName'>
                                            닉네임
                                        </div>
                                        <div className='chatContent'>
                                            안녕하세요 반갑습니다.
                                            이무성이라고합니다 반가워요. 잘
                                            부탁드립니다.안녕하세요 반갑습니다.
                                            이무성이라고합니다 반가워요. 잘
                                            부탁드립니다.
                                        </div>
                                    </div>
                                </div>
                                <div className='chatCreatedAt'>시간 </div>
                            </>
                        );
                    })}
                </RoomLink>
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
