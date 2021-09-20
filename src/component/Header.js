import React from 'react';
import styled from 'styled-components';


// 하나의 컴포넌트를 생성 (재사용)

// styled-components의 장점 => js+css 파일 관리!!
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <ul>
                <li>오시는길 : 서울 강남구 ...</li>
                <li>전화번호 : 020202</li>
            </ul>
        </StyledHeaderDiv>
    );
};

export default Header;