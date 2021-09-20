import React from 'react';
import styled from 'styled-components';


// 하나의 컴포넌트를 생성 (재사용)

// styled-components의 장점 => js+css 파일 관리!!
const StyledFooterDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Footer = () => {
    return (
        <StyledFooterDiv>
            <ul>
                <li>메뉴 1</li>
                <li>메뉴 2</li>
            </ul>
        </StyledFooterDiv>
    );
};

export default Footer;