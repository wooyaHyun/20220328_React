
import React from 'react'
import A07WithComp from './A07WithComp'

function A07HigherOrder(props) {

    const {nickname, name, num, setName, setNum} = props;

    return (
        <div>
            <h3>A07 Higher Order Component</h3>
            props: {nickname}<br />
            name: {name} / {num} <br />
            <button onClick={ () => setName('놀부')}>Name</button>
            <button onClick={ () => setNum(300)}>Name</button>
        </div>
    )
}

export default A07WithComp(A07HigherOrder, {name: 'NolBu', age: 20})
