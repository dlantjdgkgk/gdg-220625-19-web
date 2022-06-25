import React from 'react';
import styled from 'styled-components';
import { wrap } from '../common/wrap';
import { btnBack } from '../../assets/btnBack';
import { mypageIcon } from '../../assets/mypageIcon';

const Wrap = styled.div`
box-sizing: border-box;
height: 100%;
`;

const Header = styled.div`
box-sizing: border-box;
height: 62px;
padding: 21px 26px;
border-bottom: 1px solid #E9E9E9;
`;

const BtnBack = styled.button.attrs({ type: 'button' })`
display: inline-block;
width: 11px;
height: 19px;
vertical-align: top;
`;

const Heading = styled.div`
display: inline-block;
margin: 1px 0 0 20px;
`;

const Nickname = styled.div`
box-sizing: border-box;
height: 70px;
padding: 0 34px;
font-size: 13px;
line-height: 70px;
`;

const TagsHeader = styled.div`
height: 61px;
border: solid #E9E9E9;
border-width: 1px 0;
font-size: 16px;
line-height: 61px;
text-align: center;
`;

const Tags = styled.ul`
margin: -6px;
padding: 32px 27px;
`;

const Tag = styled.li`
display: inline-block;
height: 38px;
margin: 6px;
`;

const TagButton = styled.button.attrs({ type: 'button' })`
box-sizing: border-box;
height: 38px;
padding: 0 18px;
border: 1px solid #ABABAB;
border-radius: 19px;
${props => props.selected ? `
border: 1px solid #E48C8C;
background-color: #E48C8C;
color: #fff;
` : `
border: 1px solid #ABABAB;
background-color: #fff;
color: #ABABAB;
`}
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

    return (
        <Wrap>
            <Header>
                <BtnBack
                    dangerouslySetInnerHTML={{ __html: btnBack  }}
                    onClick={() => {
                        window.history.back();
                    }}
                />
                <Heading dangerouslySetInnerHTML={{ __html: mypageIcon }} />
            </Header>
            <Nickname>{nickname}</Nickname>
            <TagsHeader>키워드</TagsHeader>
            <Tags>
                {tags?.map(({ id, text }, i) => (
                    <Tag key={`tag-${id}`}>
                        <TagButton
                            selected={i === _tagIndex}
                            onClick={() => setTagIndex(i)}
                        >
                            {text}
                        </TagButton>
                    </Tag>
                ))}
            </Tags>
            {/* <SubmitButton
                onClick={() =>
                    onSubmit({
                        nickname: _nickname,
                        tagIndex: _tagIndex,
                        alertOn: _alertOn,
                    })
                }
            >저장</SubmitButton> */}
        </Wrap>
    );
}
export default wrap(MyPageView, { disableGnb: true });
