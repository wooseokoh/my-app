import './App.css';

// 0.React 엔진 - 데이터변경감지에서 UI그려주는
// 1.실행 과정 (index.html) - SPA
// 2.JSX 문법
// 3.바벨(자바스크립트 ES5) -> ES6

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수 선언은 let 혹은 const로만 해야함.
// (3) if 사용 불가능 -> 삼항연산자.
// (4) 조건부 렌더링.
// (5) css 디자인.
// - 내부에 적는방법
// - 외부파일에 적는방법
// - 라이브러리 사용 (부트스트랩, coomponet-styled) 

let a = 10; // 변수
const b = 20; // 상수

const mystyle = {
  color: 'red',
};

function App() {
  return (
    <div>
      <div style={mystyle}>안녕 {a === 10 ? '10입니다.' : '10이 아님'}</div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
    </div>
  );
}

export default App;
