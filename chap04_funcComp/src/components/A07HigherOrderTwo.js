
import React from 'react'
import A07WithComp from './A07WithComp'

function A07HigherOrderTwo(props) {

    const {nickname, name, num, setName, setNum} = props;

    return (
        <div>
            <h3>A07 Higher Order Component Two</h3>
            props: {nickname}<br />
            name: {name} / {num} <br />
            <button onClick={ () => setName('놀부')}>Name</button>
            <button onClick={ () => setNum(300)}>Name</button>
        </div>
    )
}

// A07WithComp는 일반적인 함수
// 함수가 DOM(JSX)를 반환하는 함수나 클래스를 리턴해야 한다.
export default A07WithComp(A07HigherOrderTwo, {name: 'ABC', age: 2000})
