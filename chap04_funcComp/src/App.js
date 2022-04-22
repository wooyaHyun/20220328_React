import 'bootstrap/dist/css/bootstrap.css'

import {useState} from 'react'
import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A07HigherOrder from './components/A07HigherOrder'
import A07HigherOrderTwo from './components/A07HigherOrderTwo'
import A08Immer from './components/A08Immer'
import A09Currency from './components/A09Currency'

function App() {
  // 변경되지 않는 변수
  let num = 10;
  let user = { name: 'HungBu', age: 20};
  let arr = [10, 20, 30];
  let onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const [str, setStr] = useState('Hello World');

  const changeName = () => num = 20;
  const changeStr = () => setStr('Hi World');

  return (
    <div className="card-body">
      <h1>Chap04 Function Component</h1>

      <A09Currency /><br />
      
      <A08Immer /><br />

      <A07HigherOrderTwo nickname="HungBu" /><br />

      <A07HigherOrder nickname='NolBu'/><br />

      <A06Hook /><br />

      <A05Hook /><br />

      <A04CreateDOM /><br />

      <A03FuncEvent /><br />

      <A02FuncState /><br />

      <A01FuncProps name="NolBu" age={20} num={num} user={user} ary={arr} onAdd={onAdd}
        str={str} changeStr={changeStr} changeName={changeName} isChecked>This is App Content</A01FuncProps>
    </div>
  );
}

export default App;
