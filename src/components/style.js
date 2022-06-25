import styled from 'styled-components';

export const Navbar = styled.div`
    padding: 20px;
`;

export const Rooms = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    button {
        padding: 10px;
        width: 320px;
        height: 40px;
        background-color: green;
    }
`;

export const Chat = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    border-top: 2px solid black;
    .chatWrapper {
        width: 60%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        .chatContent {
            margin: 10px;
            width: 40px;
            border: 2px solid black;
        }
    }
`;
export const SendText = styled.div`
    width: 100%;
    height: 60px;
    border: 2px solid black;
    button {
        width: 30%;
        height: 20px;
        background-color: red;
    }
`;
