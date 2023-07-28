import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplates';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([ // 초기 객체 리스트 생성
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: false,
    },
    {
      id: 2,
      text: '슈퍼샤이 안무 연습하기',
      checked: true,
    },
    {
      id: 3,
      text: '프론트엔드 인터랙션 웹 공부하기',
      checked: true,
    }
  ]);
  
  // useRef()는 상태관리는 받지 않지만 보존되는 값을 생성할때 사용합니다.
  const nextId = useRef(4); // nextId는 4라는값이 저장되는데 서버를 재시작하기전까지는 렌더링 등을 해도 변경없습니다.

  const onInsert = (text) => { // 텍스트를 전달받으면, setTodos를 이용해 todos내부 요소를 추가합니다.
    setTodos([...todos, {id: nextId.current, text:text, checked:false}]);
    nextId.current += 1; // 전역 아이디값 1 증가.
  }

  return (
    <TodoTemplate food="pizza">
      {/* children을 TodoTemplate 내부에 선언해놨기때문에, 다른 컴포넌트가 자식요소로 오면 내부에 렌더링해줌. */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos}/> {/* 초기 표시 데이터 props.todos로 전달 */}
    </TodoTemplate>
  );
}

export default App;
