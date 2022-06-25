import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { wrap } from './common/wrap';
import { useAppContext } from '../contexts';
import { profile } from '../assets/profile';

const Wrap = styled.div``;

const Header = styled.div`
padding: 21px 17px 14px;
`;

const Rooms = styled.div``;

const RoomLink = styled(Link)`
display: block;
`;

const Title = styled.h2`
font-size: 20px;
line-height: 23px;
`;

const RoomCard = styled.div`
box-sizing: border-box;
height: 72px;
padding: 12px 22px;

.thumb {
    float: left;
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 7px;
    background-color: #D9D9D9;
}
.info {
    overflow: hidden;
    padding-left: 15px;
}
.title {
    display: block;
    font-size: 16px;
    color: #000;
}
.desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: 5px;
    font-size: 13px;
    color: #7D7D7D;
}
`;

const ChatListFunction = () => {
    const fetcher = useAppContext().fetcher;
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetcher.getChatList().then((rooms) => {
            setRooms(rooms);
        })
    }, []);

    return (
        <Wrap>
            <Header>
                <Title>채팅</Title>
            </Header>
            <Rooms>
                <RoomLink to={`/chatroom/${'1'}`}>
                    {rooms.map((room, index) => {
                        return (
                            <RoomCard>
                                <div className="thumb" dangerouslySetInnerHTML={{ __html: profile }} />
                                <div className="info">
                                    <strong className="title">{room.nickname}</strong>
                                    <p className="desc">{room.recentText}</p>
                                </div>
                            </RoomCard>
                        );
                    })}
                </RoomLink>
            </Rooms>

            {/* <Toolbar></Toolbar> */}
        </Wrap>
    );
};

class ChatList extends React.Component {
    render() {
        return <ChatListFunction />;
    }
}
export default wrap(ChatList);
