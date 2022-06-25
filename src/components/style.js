import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
    div {
        border-top: 3px solid black;
    }
    h1 {
        padding: 20px;
    }
`;

export const Rooms = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    padding: 0 20px;
    .formation::after {
        content: '';
        clear: both;
    }
    img {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
    .nameContent {
        overflow: hidden;
    }
    .chatContent {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 42px;
    }
    .chatCreatedAt {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 20px;
    }
`;

export const RoomLink = styled(Link)`
    display: block;
    position: relative;
    padding: 20px;
    text-align: left;
`;

export const Chat = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    background-color: white;
    padding: 0 20px;
    .chat::after {
        content: '';
        display: block;
        clear: both;
    }
    // float 를 위한 속성
    .sendContent {
        width: 160px;
        margin-top: 40px;
        float: right;
        height: 20px;
        background-color: #5b6cde;
        border-radius: 20px;
        padding: 10px;
        color: white;
    }
    .receiveContent {
        width: 160px;
        margin-top: 40px;
        float: left;
        height: 20px;
        background-color: #decfca;
        border-radius: 20px;
        padding: 10px;
    }
`;

export const SendText = styled.div`
    input {
        width: 100%;
        height: 60px;
        border: none;
        background-color: #decfca;
        padding-left: 8px;
    }
`;

export const MypageNavBar = styled.div`
    button {
        display: flex;
        align-items: center;
        padding: 20px;
    }
    img {
        width: 32px;
        height: 32px;
    }
    h1 {
        margin-left: 10px;
    }
`;

export const NickName = styled.div`
    display: flex;
    justify-content: space-between;
`;
