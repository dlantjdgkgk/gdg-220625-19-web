import styled from 'styled-components';
import { smallLogo } from '../../assets/smallLogo';
import { profile } from '../../assets/profile';
import { commentImage } from '../../assets/commentImage';
import { Loading } from '../common/Loading';

const Header = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
box-sizing: border-box;
height: 61px;
padding: 19px 17px;
border: 1px solid #E9E9E9;
`;

const Wrap = styled.div`
box-sizing: border-box;
height: 100%;
padding-top: 61px;
`;

const Scroller = styled.div`
overflow-y: auto;
height: 100%;
padding: 20px 25px;
`;

const CommentWrap = styled.div`
&::after {
    content: '';
    display: block;
    clear: both;
}
`;

const Comment = styled.p`
float: left;
font-size: 17px;
line-height: 28px;
color: #303030;
`;

const CommentImage = styled.img`
float: right;
width: 80px;
`;

const LoadingWrap = styled.div`
margin: 60px auto 30px;
`;

const List = styled.ul`
display: block;
width: 100%;
box-sizing: border-box;
margin-top: 22px;
border: 1px solid #eee;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
`;

const Item = styled.li`
display: block;
position: relative;
height: 54px;
&::after {
    content: '';
    position: absolute;
    right: 31px;
    bottom: 0;
    left: 31px;
    height: 1px;
    background-color: #F3F3F3;
}
`;

const ChatRoomButton = styled.button.attrs({type: 'button'})`
display: flex;
width: 100%;
height: 54px;
padding: 13px 40px 9px 31px;
line-height: 54px;
align-items: center;
`;

const Profile = styled.div`
flex-grow: 0;
position: relative;
width: 33px;
height: 33px;
background-color: #E48C8C;
border-radius: 50%;

svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
`;

const Nickname = styled.strong`
flex-grow: 1;
height: 54px;
padding-left: 30px;
font-weight: 400;
font-size: 16px;
text-align: left;
color: #000;
`;

const Tag = styled.div`
flow-grow: 0;
width: 62px;
height: 54px;
text-align: right;
font-size: 14px;
color: #888888DE;
`;

const Distance = styled.div`
flow-grow: 0;
height: 54px;
margin-left: 8px;
font-size: 16px;
color: #000;
`;

export function NeighborhoodsView({neighborhoods, map, isLoading, onClickMember}) {
    return (
        <>
            <Header dangerouslySetInnerHTML={{ __html: smallLogo }} />
            <Wrap>
                <Scroller>
                    <CommentWrap>
                        <Comment>가까운 거리에서 보이는 곳에서<br />채팅해보세요!</Comment>
                        <CommentImage src={commentImage} width={80} />
                    </CommentWrap>
                    {isLoading && (
                        <LoadingWrap>
                            <Loading />
                        </LoadingWrap>
                    )}
                    {(!isLoading && neighborhoods.length > 0) && (
                        <>
                        {map}
                        <List>
                            {neighborhoods.map(({memberId, nickname, tag, distance}) => (
                                <Item key={`neighborhood-${memberId}`}>
                                    <ChatRoomButton onClick={() => onClickMember(memberId)}>
                                        <Profile dangerouslySetInnerHTML={{ __html: profile }} />
                                        <Nickname>{nickname}</Nickname>
                                        <Tag>{tag}</Tag>
                                        <Distance>{`${distance}m`}</Distance>
                                    </ChatRoomButton>
                                </Item>
                            ))}
                        </List>
                        </>
                    )}
                </Scroller>
            </Wrap>
        </>
    );
}

