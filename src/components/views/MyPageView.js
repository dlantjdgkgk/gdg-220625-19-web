import React from 'react';
import styled from 'styled-components';
import { wrap } from '../common/wrap';
import { MypageNavBar, NickName } from '../style';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
    box-sizing: border-box;
    height: 100%;

    .goBack {
        display: flex;
        padding: 20px;
        h1 {
            margin-left: 20px;
        }
    }
`;

const Nickname = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    p {
        padding: 20px;
    }
`;

const Tags = styled.ul``;

const Tag = styled.li``;

const TagButton = styled.button.attrs({ type: 'button' })``;

const AlertCheckbox = styled.input.attrs({ type: 'checkbox' })``;

const SubmitButton = styled.button.attrs({ type: 'button' })``;

export function MyPageView({ nickname, tags, tagIndex, alertOn, onSubmit }) {
    const [_nickname, setNickname] = React.useState('');
    const [_tagIndex, setTagIndex] = React.useState(-1);
    const [_alertOn, setAlertOn] = React.useState(false);

    React.useEffect(() => {
        setNickname(nickname);
        setTagIndex(tagIndex);
        setAlertOn(alertOn);
    }, [nickname, tagIndex, alertOn]);
    const handleBack = () => {};
    return (
        <>
            <Wrap>
                <div className='goBack'>
                    <button onClick={handleBack}>
                        <img src='img/back.png'></img>
                    </button>
                    <h1>MY page</h1>
                </div>
                <Nickname
                    value={_nickname}
                    onChange={(e) => setNickname(e.target.value)}
                >
                    <p> 나의 닉네임</p>
                </Nickname>

                {/* <AlertCheckbox
                    checked={_alertOn}
                    onChange={(e) => setAlertOn(e.target.value)}
                /> */}
                <Tags>
                    {tags.map(({ id, text }, i) => (
                        <Tag key={`tag-${id}`}>
                            <TagButton
                                selected={i === tagIndex}
                                onClick={() => setTagIndex(i)}
                            >
                                {text}
                            </TagButton>
                        </Tag>
                    ))}
                </Tags>
                <SubmitButton
                    onClick={() =>
                        onSubmit({
                            nickname: _nickname,
                            tagIndex: _tagIndex,
                            alertOn: _alertOn,
                        })
                    }
                ></SubmitButton>
            </Wrap>
        </>
    );
}
export default wrap(MyPageView, { disableGnb: true });
