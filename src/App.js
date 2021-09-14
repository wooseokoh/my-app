import { useState } from 'react';
import './App.css';
import Sub from './Sub';

function App() {
  console.log('App 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '코스' },
    { id: 4, name: '장보고' },
  ];

  // 다운로드 받음
  // React안에 hooks 라이브러리
  const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작!!

  const download = () => {
    // fetch().then().then()
    // 기존 데이터 세팅
    setUsers([...sample, { id: num, name: '조자룡' }]); // ...sample 값이 4개라 { id: num, name: '조자룡' } <--- 값만 변경됨
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
