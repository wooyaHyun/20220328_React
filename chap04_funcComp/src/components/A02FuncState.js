// A02FuncState.js

import React, { useState } from 'react'

function A02FuncState() {

  // state 변수는 useState라는 Hook을 이용한다.
  // name이 변수. setName이 setter 함수. 변수로 바로 접근하는 것은 안된다. 변수는 참조만 가능
  const [name, setName] = useState('NolBu');
  const [age, setAge] = useState(30);
  const [isChecked, setIsChecked] = useState(true);
  const [user, setUser] = useState({name: 'HungBu', age: 30});
  const [arr, setArray] = useState([10, 20]);

  const changeName = (evt) => setName('놀부');
  const changeAge = () => setAge(100);
  const changeCheck = () => setIsChecked( !isChecked );

  const addObject = (key, value) => {
    const data = {
      ...user,
      [key]: value
    }
    setUser(data);
  };
  const updateObject = (key, value) => {
    const data = {
      ...user,
      [key]: value
    }
    setUser(data);
  };
  const deleteObject = (key) => {
    delete user[key];
    setUser( {...user} );
  };

  const addArray = () => {
    const data = Math.ceil( Math.random() * 100 );
    setArray( arr.concat(data) );
  };
  const updateArray = (index, value) => {
    const data = arr.map( (item, i) => index === i ? value : item );
    setArray( data );
  };
  const deleteArray = (index, value) => {
    const data = arr.filter( (item, i) => index !== i );
    setArray( data );
  };
  


  return (
    <div>
      <h3>A02 Function State</h3>

      <div>
        Name: {name}<br />
        Age: {age}<br />
        isChecked: {isChecked ? 'TRUE' : 'FALSE'}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        <br />
        
        { arr.map( (item, index) => <span key={index}>{item}{' '}</span>)}
      </div>
      <br />

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={changeAge}>Age</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={() => addObject('address', 'Seoul')}>AddObject</button>
        <button onClick={() => updateObject('address', 'Busan')}>UpdateObject</button>
        <button onClick={() => deleteObject('address')}>DeleteObject</button>
        <button onClick={() => addArray()}>AddArray</button>
        <button onClick={() => updateArray(1, 1000)}>UpdateArray</button>
        <button onClick={() => deleteArray(1)}>DeleteArray</button>

      </div>
    </div>
  )
}

export default A02FuncState