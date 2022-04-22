import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import A01Props from './components/A01Props'
import A02ClassState from './components/A02ClassState'
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05LifeCycle from './components/A05LifeCycle'
import A06PureComponent from './components/A06PureComponent'
import A07ShallowEqual from './components/A07ShallowEqual'
import A08HigherOrderComp from './components/A08HigherOrderComp'
import A08HigherOrder from './components/A08HigherOrder'
import A09Currency from './components/A09Currency'

function App() {
  // 변경되지 않는 변수
  let num = 10;
  let user = { name: 'HungBu', age: 20};
  let arr = [10, 20, 30];
  let onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const [str, setStr] = useState('Hello World');

  // 변수 값이 변경되더라도 화면 갱신 작업은 이루어지지 않는다.
  // 이 값을 받은 하위 컴퍼넌트에서도 화면 갱신작업은 이루어지지 않는다.
  const changeName = () => num = 20;

  // state로 선언된 변수만 감시자가 등록되고 값이 변경되면 화면 갱신 작업이 이루어진다.
  // 이때 속성으로 하위 컴퍼넌트에 값을 전달한 경우 하위 컴퍼넌트의 view도 변경된다.
  // ***[중요] 리엑트에서는 state 변수, 그리고 그 state 변수를 속성을 받은 props 변수만 화면 변경 대상이 된다
  //    또는 focusUpdate() 함수를 강제적으로 실행.
  const changeStr = () => setStr('Hi World');

  return (
    <div className="card-body">
      <h1>Chap03 Class Component</h1>

      <A09Currency /><br />

      <A08HigherOrder name="HungBu" /><br />

      <A08HigherOrderComp name="NolBu" /><br />

      <A07ShallowEqual /><br />
      
      <A06PureComponent /><br />

      <A05LifeCycle color="orange" /><br />

      <A04CreateDOM /><br />

      <A03ClassEvent /><br />

      <A02ClassState /><br />

      <div>
        props로 전달한 값은 하위 컴퍼넌트에서 수정 불가능한 값이다. (참조만 가능)<br />
        Num: {num} / {str}
      </div>
      <A01Props name="NolBu" age={30} num={num} user={user} ary={arr} onAdd={onAdd} isChecked str={str}>
        This is App Content 01
      </A01Props>
      <A01Props name="NolBu" age={30} num={num} user={user} ary={arr} onAdd={onAdd} isChecked str={str}>
        This is App Content 02
      </A01Props>
      <button onClick={changeName}>NUM</button>
      <button onClick={changeStr}>Str</button>
    </div>
  );
}

export default App;
