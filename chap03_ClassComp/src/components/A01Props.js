// A01Props.js

// rce
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class A01Props extends Component {
  render() {
    return (
      <div>
        <h3>A01 Props [immutable]</h3>

        <div>
          내장 속성 this.props로 속성으로 전달 한 값을 받는다<br />
          메서드를 이용해서 props에 있는 값을 변경할 수 없다. <br />
          상위 컴퍼넌트에서 변경하면 state 변수의 경우만 변경된 값으로 화면 갱신 작업이 이루어 진다<br />

          Name: {this.props.name} <br />
          Age: {this.props.age + 100} <br />
          Object: {this.props.user.name} / {this.props.user.age} / {this.props.user.address} <br />
          Array: {this.props.ary[0]} / {this.props.ary[1]} / {this.props.ary[10]}<br />
          Num: {this.props.num}<br />
          Function: {this.props.onAdd(10, 20)}<br />
          React는 변수의 값이 boolean type이면 화면에 표시하지 않음.<br />
          isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br  />
          String: {this.props.str}
          <br />

          Cnt: {this.props.cnt}<br />
          Obj: {this.props.obj.tel} / {this.props.obj.address}<br />
          <br />

          {this.props.children}<br />
          <br />
        </div>
      </div>
    )
  }
}

export default A01Props;

// 값이 넘어오지 않는 경우를 대비해서 기본 값을 지정할 수 있다.
A01Props.defaultProps = {
  cnt: 0,
  obj: {address: 'Seuol', tel: '010-1234-5678'}
}

// 넘어오는 값의 타입을 체크할 수 있다.
// import PropTypes from 'prop-types' 형태로 import를 해야 한다
A01Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  ary: PropTypes.array,
  isChecked: PropTypes.bool,
  onAdd: PropTypes.func
}