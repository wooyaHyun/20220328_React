
import 'bootstrap/dist/css/bootstrap.css';

import React, { Suspense } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

// Audio, BallTriangle, Bars, Circles, CirclesWithBar, FallingLines, Grid, Hearts, InfinitySpin, 
// LineWave, MutatingDots, Oval, Plane, Puff, RevolvingDot, Rings, RotatingLines, RotatingSquare, 
// TailSpin, ThreeCircles, ThreeDots, Triangle, Watch
import {Audio} from 'react-loader-spinner'

// npm i react-router@5 react-router-dom@5
// npm i react-loader-spinner

import A01FuncProps from './components/A01FunctionProps'
import A02FuncState from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'
// import A06Arguments from './components/A06Arguments'
// import A07Child from './components/A07ChildComponent'
// import NotFoundComponent from './components/NotFoundComponent'

// Lazy Load
const A06Arguments = React.lazy( () => import('./components/A06Arguments') )
const A07Child = React.lazy( () => import('./components/A07ChildComponent') )
const NotFoundComponent = React.lazy( () => import('./components/NotFoundComponent') )

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  const style = { color: 'orange', fontWeight: 'bold' };

  return (
    <div className="card-body">
      <h1>Chap07 Router</h1>

      <NavLink activeStyle={style} to="/">INDEX</NavLink> | {' '}
      <NavLink activeStyle={style} to="/A01FuncProps">A01FuncProps</NavLink> | {' '}
      <NavLink activeStyle={style} to="/A02FuncState">A02FuncState</NavLink> | {' '}
      <Link to="/A03Currency">A03Currency</Link> | {' '} <Link to="/A03">A03</Link> | {' '}
      <Link to="/A04History">A04History</Link> | {' '}
      <Link to="/A05MatchParam/5/data/NolBu">A05MatchParam 5</Link> | {' '}
      <Link to="/A05MatchParam/3/data/HungBu">A05MatchParam 3</Link> | {' '}
      <Link to="/A06Arguments?id=5&name=NolBu&address=Seoul#TOP">A06Arguments 5</Link> | {' '}
      <Link to="/A06Arguments?id=3&name=HungBu&address=Busan#BOTTOM">A06Arguments 5</Link> | {' '}
      <Link to="/A07Child">A07Child</Link> | {' '}
      <Link to="/ABC">ABC</Link> | {' '}

      <hr />

      {/* 매칭되는 주소를 만나면 Switch 블럭을 벗어난다. */}
      <Switch>
        {/* exact는 패스가 정확히 매칭되는 경우만 출력 */}
        <Route path="/"        exact={true}         render={ () => (
                                          <div>
                                            <h3>Index</h3>
                                            <div>This is Index Page</div>
                                          </div>
                                        )} />
        {/* props로 전달할 값이 있는 경우 */}                                
        <Route path="/A01FuncProps"              render={ () => <A01FuncProps name="NolBu" age={20} arr={ary} user={user} onPlus={onPlus} isChecked >컨텐츠</A01FuncProps> }/>   
        <Route path="/A02FuncState"              component={A02FuncState} />   {/* props로 전달할 값이 없는 경우 */}
        <Route path={["/A03Currency", "/A03"]}               component={A03Currency} />
        <Route path="/A04History"                component={A04History} />

        {/* path에 :변수명 형태로 기술하면 변수명 역할을 한다. Link에서 패스의 수는 맞아야 한다. Link to="A05MatchParam/5" => id = 5 */}
        <Route path="/A05MatchParam/:id/data/:name"             component={A05MatchParam} />

        {/* (<Loader type="Oval" />) */}
        <Suspense fallback={<Audio color='orange' />}>
          <Switch>
            {/* 주소줄에 ?id=5&name=Nolbu 형태로 전달하고자 하는 경우. Route에서는 지정할 값이 없음. Link에서 지정 */}
            <Route path="/A06Arguments"           component={A06Arguments} />

            {/* 하위 Route 구성. component 내부에 Router 구성을 작성한다. */}
            <Route path="/A07Child"               component={A07Child} />

            {/* 마지막에 기술할 필요가 있다. *은 모든 패스에 매칭되므로 항상 표시 => Switch와 함께 사용할 필요 있음  */}
            <Route path="/*"                      component={NotFoundComponent} />
          </Switch>
          
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
