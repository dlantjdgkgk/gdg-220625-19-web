import React from 'react';
import { wrap } from './common/wrap';
import { MypageNavBar, NickName } from './style';
import { useNavigate } from 'react-router-dom';
const MyPageFunction = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate();
    };
    return (
        <>
            <MypageNavBar>
                <button onClick={handleBack}>
                    <img src='img/back.png'></img>
                    <h1>My page</h1>
                </button>
            </MypageNavBar>
            <NickName>
                <p>나의 닉네임</p>
                <label class='switch'>
                    <input type='checkbox' />
                    <span class='slider round'></span>
                </label>
            </NickName>
        </>
    );
};

class MyPage1 extends React.Component {
    render() {
        return <MyPageFunction />;
    }
}

export default wrap(MyPage1, { disableGnb: true });
