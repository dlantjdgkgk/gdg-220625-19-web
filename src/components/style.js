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
    button {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 320px;
        height: 80px;
        background-color: white;
        border-radius: 10px;
        border: 2px solid black;
        .formation {
            display: flex;
            flex: 1;
            align-items: center;
        }
        .nameContent {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
`;

export const Chat = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .chatWrapper {
        width: 80%;
        height: 100%;
        .sendContent {
            width: 160px;
            margin-top: 40px;
            float: right;
            height: 20px;
            border: 2px solid black;
        }
        .receiveContent {
            width: 160px;
            margin-top: 40px;
            float: left;
            height: 20px;
            border: 2px solid black;
        }
    }
`;
export const SendText = styled.div`
    input {
        width: 100%;
        height: 60px;
        border: 2px solid black;
        padding-left: 8px;
    }
    button {
        width: 30%;
        height: 20px;
        background-color: red;
    }
`;
