import React from 'react';

// Function 방식
// class 방식

const Home = (props) => {
    
    // 구조분할 할당
    const {boards, setBoards, num, setNum} = props;

    return (
        <div>
            <h1>홈 : {num}</h1>
            <button onClick={() => setNum(num + 1)}>번호증가</button>
            <button onClick={() => setBoards([])}>전체삭제</button>
            {boards.map((board) => <h3>제목 : {board.title} 내용 : {board.content}</h3>)}
        </div>
    );
};

export default Home;