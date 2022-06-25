import React from 'react';
import styled from 'styled-components';
import { wrap } from '../common/wrap';

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
    padding: 20px;
`;

const Tags = styled.ul``;

const Tag = styled.li`
    display: table-cell;
    text-align: center;
    width: 25% !important;
    padding: 5px 0;
    display: inline-block;
    list-style: none;
    background-color: white;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
    border: 1px solid black;
    line-height: 60px;
    padding: 10px;
`;

const AlertCheckboxLabel = styled.label`
    display: inline-block;
    width: 60px;
    height: 30px;
    vertical-align: top;
    border-radius: 15px;
    background-color: #ccc;

    &::after {
        content: '';
        display: inline-block;
        width: 27px;
        height: 27px;
        margin: 2px;
        border-radius: 50%;
        background-color: #fff;
        vertical-align: top;
        transition: transform 0.5s;
        transform: translateX(0);
    }
`;

const AlertCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px;

    &:checked + ${AlertCheckboxLabel} {
        background-color: #34c759;
        &::after {
            transform: translateX(30px);
        }
    }
`;

const KeyWord = styled.div`
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
`;

const TagButton = styled.button.attrs({ type: 'button' })`
    .active {
        background-color: red;
    }
`;

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
                <Nickname>
                    <input
                        value={_nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    ></input>
                    <AlertCheckbox
                        id='alertOn'
                        // checked={_alertOn}
                        // onChange={(e) => setAlertOn(e.target.value)}
                    />
                    <AlertCheckboxLabel htmlFor='alertOn' />
                </Nickname>
                <hr />
                <KeyWord>
                    <p>키워드</p>
                </KeyWord>

                <Tags>
                    {tags?.map(({ id, text }, i) => (
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
