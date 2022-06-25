import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`

`;

const Nickname = styled.input`
display: block;
`;

const Tags = styled.ul``;

const Tag = styled.li``;

const TagButton = styled.button.attrs({type: 'button'})``;

const AlertCheckbox = styled.input.attrs({type: 'checkbox'})``;

const SubmitButton = styled.button.attrs({type: 'button'})``;

export function MyPageView({nickname, tags, tagIndex, alertOn, onSubmit}) {
    const [_nickname, setNickname] = React.useState('');
    const [_tagIndex, setTagIndex] = React.useState(-1);
    const [_alertOn, setAlertOn] = React.useState(false);

    React.useEffect(() => {
        setNickname(nickname);
        setTagIndex(tagIndex);
        setAlertOn(alertOn);
    }, [nickname, tagIndex, alertOn]);

    return (
        <Wrap>
            <Nickname value={_nickname} onChange={e => setNickname(e.target.value)} />
            <AlertCheckbox checked={_alertOn} onChange={e => setAlertOn(e.target.value)} />
            <Tags>
                {tags.map(({id, text}, i) => (
                    <Tag key={`tag-${id}`}>
                        <TagButton selected={i === tagIndex} onClick={() => setTagIndex(i)}>{text}</TagButton>
                    </Tag>
                ))}
            </Tags>
            <SubmitButton onClick={() => onSubmit({
                nickname: _nickname,
                tagIndex: _tagIndex,
                alertOn: _alertOn
            })}>저장</SubmitButton>
        </Wrap>
    )
}
