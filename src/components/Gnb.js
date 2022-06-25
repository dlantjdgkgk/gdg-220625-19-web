import styled from "styled-components";

const GNB_HEIGHT = 80;

const GnbWrap = styled.div`
position: fixed;
bottom: 0;
right: 0;
left: 0;
height: ${GNB_HEIGHT}px;
background-color: #ddd;
`;

const GnbInner = styled.div`
display: flex;
height: ${GNB_HEIGHT}px;
`;

const GnbArea = styled.button`
flex-grow: 1;
width: 100%;
height: ${GNB_HEIGHT}px;
font-size: 16px;
line-height: ${GNB_HEIGHT}px;
color: #000;

& + & {
    border-left: 1px solid #000;
}
`;

export function Gnb() {
    return (
        <GnbWrap>
            <GnbInner>
                <GnbArea>주변이웃</GnbArea>
                <GnbArea>채팅</GnbArea>
                <GnbArea>마이페이지</GnbArea>
            </GnbInner>
        </GnbWrap>
    );
}
