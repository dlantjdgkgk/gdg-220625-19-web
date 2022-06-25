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

export function MyPageView({nickname, tags, tagsSelected, alertOn, onSubmit}) {
    const [_nickname, setNickname] = React.useState('');
    const [_tagsSelected, setTagsSelected] = React.useState([]);
    const [_alertOn, setAlertOn] = React.useState(false);

    React.useEffect(() => {
        setNickname(nickname);
        setTagsSelected(tagsSelected);
        setAlertOn(alertOn);
    }, [nickname, tagsSelected, alertOn]);

    return (
        <Wrap>
            <Nickname value={_nickname} onChange={e => setNickname(e.target.value)} />
            <Tags>
                {tags.map(({id, text}, i) => (
                    <Tag key={`tag-${id}`}>
                        <TagButton selected={_tagsSelected[i]} onClick={() => {
                            setTagsSelected(_tagsSelected.map((selected, idx) => idx === i ? !selected : selected));
                        }}>{text}</TagButton>
                    </Tag>
                ))}
            </Tags>
            <AlertCheckbox checked={_alertOn} onChange={e => setAlertOn(e.target.value)} />
            <SubmitButton onClick={() => onSubmit({
                nickname: _nickname,
                tagsSelected: _tagsSelected,
                alertOn: _alertOn
            })}>저장</SubmitButton>
        </Wrap>
    )
}
