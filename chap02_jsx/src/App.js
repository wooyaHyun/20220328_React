
/*
function App() {
  return <h1>Hello World 01</h1>
}


const dom = <h1>Hello World 02</h1>
function App() {
  return dom;
}


// 1개의 element만 리턴이 가능하다.
function App() {
  return <div>
    <h1>Hello World 03</h1>
    <div>This is App Content</div>
  </div>
}


const dom = <div>
  <h1>Hello World 04</h1>
  <div>This is App Content</div>
</div>

function App() {
  return dom;
}


// 개행에 주의
function App() {
  return (
    <div>
      <h1>Hello World 05</h1>
      <div>This is App Content</div>
    </div>
  );
}


import OuterComp from './components/A01OuterComp'

const outer = 'Outer 변수';

// 함수의 이름이 대문자고 리턴값이 JSX DOM이면 react는 이를 사용자 정의 태그로 변환해 준다.
const MakeDOM = () => {
  return (
    <div>
      <h3>MakeDOM Function</h3>
      <div>This is Function</div>
    </div>
  )
};

function App() {
  const name = 'NolBu';
  const age = 30;
  const info = () => (
    <div>
      <h3>Info Function</h3>
      <div>Info Function</div>
    </div>
  )

  return (
    <div>
      <h1>Hello World 06</h1>
      <div>This is App Content</div>
      <br /> 
      <div>
        Name: {name}<br />
        Age: {age}<br />
        {info()}
      </div>
      
      <hr />

      <div>
        Outer: {outer} <br />
        MakeDOM: {MakeDOM()} <br />
        <br />

        MakeDOM: 
        <MakeDOM />
      </div>

      <OuterComp />
    </div>
  );
}
export default App;
*/

import 'bootstrap/dist/css/bootstrap.css'
import OuterComp from './components/A01OuterComp'
import A02ClassComp from './components/A02ClassComp'
import A03Fragment from './components/A03Fragment'
import A04Library from './components/A04Library'

// JSX => JavaScript XML
// JSX 내부에서는 JavaScript의 속성명을 사용한다.
function App() {
  return (
    
    <div className="card-body" >
      <h1>Chap01 JavaScript XML(JSX)</h1>

      <A04Library /><br />
      <A03Fragment /><br />
      <A02ClassComp /><br />
      <OuterComp />

      <img src="./images/small.jpg" width="150px" alt="로봇" />
    </div>
  );
}

export default App;
