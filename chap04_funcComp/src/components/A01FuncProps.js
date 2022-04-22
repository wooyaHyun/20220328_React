// A01FuncProps.js

// rfc => export function A01()
// rfce => 기존 방식
// rfcp => PropTypes
import React from 'react'
import PropTypes from 'prop-types'

// 함수에 매개변수 props로 받아 처리한다
function A01FuncProps(props) {

  const {name, age, user, ary, onAdd, isChecked, num, str, changeName, changeStr, children, cnt, obj} = props;

  return (
    <div>
      <h3>A01 Function Props</h3>

      <div>
        Name: {props.name}<br />
        Age: {props.age}<br />
        User: {props.user.name} / {props.user.age} / {props.user.address}<br />
        Array: {props.ary[0]} / {props.ary[1]} / {props.ary[2]}<br />
        onAdd: {props.onAdd(10, 20)}<br />
        isChecked: {props.isChecked ? 'TRUE' : 'FALSE'}<br />
        <br />
        Num: {props.num}<br />
        Str: {props.str}<br />
        <button onClick={props.changeName}>NUM</button>
        <button onClick={props.changeStr}>STR</button>
        <br />

        {props.children}<br />

        Cnt: {props.cnt}<br />
        Obj: {props.obj.address} / {props.obj.tel}
        <br /><br />
      </div>

      <div>
        Name: {name}<br />
        Age: {age}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        Array: {ary[0]} / {ary[1]} / {ary[2]}<br />
        onAdd: {onAdd(10, 20)}<br />
        isChecked: {isChecked ? 'TRUE' : 'FALSE'}<br />
        <br />
        Num: {num}<br />
        Str: {str}<br />
        <button onClick={changeName}>NUM</button>
        <button onClick={changeStr}>STR</button>
        <br />

        {children}<br />
        <br />
        
        Cnt: {cnt}<br />
        Obj: {obj.address} / {obj.tel}
      </div>
    </div>
  )
}

export default A01FuncProps

A01FuncProps.defaultProps = {
  name: 'Unknown',
  cnt: 100,
  obj: {address: 'Seoul', tel: '010'}
}

A01FuncProps.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}