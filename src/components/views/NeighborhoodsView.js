import styled from 'styled-components';

const Wrap = styled.div`
overflow-y: auto;
height: 100%;
`;

const List = styled.ul`
display: block;
width: 100%;
`;

const Item = styled.li`
display: block;
`;

const ChatRoomButton = styled.button.attrs({type: 'button'})`
display: block;
`;

export function NeighborhoodsView({neighborhoods, onClickMember}) {
    return (
        <Wrap>
            <List>
                {neighborhoods.map(({memberId}) => (
                    <Item key={`neighborhood-${memberId}`}>
                        <ChatRoomButton onClick={() => onClickMember(memberId)}>
                            {memberId}
                        </ChatRoomButton>
                    </Item>
                ))}
            </List>
        </Wrap>
    );
}

