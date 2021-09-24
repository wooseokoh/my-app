import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

// 부모로 부터 받아온 어떤 데이터를 가지고 스타일링을 동적으로 할것이라면?


const StyledDeleteButton = styled.button`
        color: ${(props) => props.user.username === 'ssar' ? 'blue' : 'red'};
`;

const StyledAddButton = styled(StyledDeleteButton)`
    color: ${(props) => props.user.username === 'ssar' ? 'blue' : 'red'};
    background-color: green;
`;

const Home = (props) => {
    
    // 구조분할 할당
    const {boards, setBoards, user} = props;

    return (
        <div>
            <h1>홈</h1>
            <Button variant="primary">Primary</Button>
            <StyledAddButton user={user}>더하기</StyledAddButton>
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>
                전체삭제
            </StyledDeleteButton>
            {boards.map((board) => <h3 key={board.id}>제목 : {board.title} 내용 : {board.content}</h3>)}
        </div>
    );
};

export default Home;