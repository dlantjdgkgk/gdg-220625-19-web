import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { navNeighborhood } from '../../assets/navNeighborhood';
import { navChat } from '../../assets/navChat';
import { navPerson } from '../../assets/navPerson';

const GNB_HEIGHT = 56;

const GnbWrap = styled.div`
position: fixed;
bottom: 0;
right: 0;
left: 0;
height: ${GNB_HEIGHT}px;
background-color: #3489B9;
`;

const GnbInner = styled.div`
display: flex;
height: ${GNB_HEIGHT}px;
`;

const GnbArea = styled(Link)`
display: block;
flex-grow: 1;
width: 100%;
height: ${GNB_HEIGHT}px;
padding-top: 6px;
font-size: 16px;
line-height: ${GNB_HEIGHT}px;
text-align: center;
color: ${props => props.active ? '#FFFFFF' : '#BBBBBB'};
`;

export function Gnb() {
    const isActiveNeighborhoods = useMatch('/neighborhoods');
    const isActiveChat = useMatch('/chat');
    const isActiveMyPage = useMatch('/mypage');

    return (
        <GnbWrap>
            <GnbInner>
                <GnbArea
                    to="/neighborhoods"
                    active={isActiveNeighborhoods}
                    dangerouslySetInnerHTML={{ __html: navNeighborhood }}
                />
                <GnbArea
                    to="/chatlist"
                    active={isActiveChat}
                    dangerouslySetInnerHTML={{ __html: navChat }}
                />
                <GnbArea
                    to="/mypage"
                    active={isActiveMyPage}
                    dangerouslySetInnerHTML={{ __html: navPerson }}
                />
            </GnbInner>
        </GnbWrap>
    );
}
