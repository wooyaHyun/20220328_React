
import React, { Component } from 'react'

export class A02ClassState extends Component {
  constructor() {
    super();

    this.name = 'NolBu';      // 일반 변수. 값이 변경되도 화면 갱신은 이루어지지 않는다.

    this.state = {            // 이 내부에 선언한 변수만 화면 갱신이 이루어 진다
      nickname: 'HungBu',
      age: 20,
      user: {name: 'BangJa', age: 18},
      arr: [10, 20],
      isChecked: true
    };

    this.changeN = this.changeName.bind(this);
    this.changeNickname = this.changeNickname.bind(this);
  }

  // 일반 함수는 prototype 체인에 의해 부모 속성으로 정의되면서 this가 undefined(window)다. 따라서 bind로 재 정의 필요
  changeName() {
    console.log(this);
    this.name = 'Hello World';
  }
  changeNickname() {
    // this.state.nickname = 'Hello World';       // state 변수는 직접 접근할 수 없다.
    // 내장 함수 setStage를 이용해서 접근한다.
    this.setState( {nickname: 'Hello world'} );   // {...this.state, nickname: 'Hello'}
  }

  // Arrow 함수는 상위 스코프의 this를 따른다. 따라서 this가 클래스 (재 정의 필요 없음)
  changeAge = () => {
    this.setState( {age: 100} )
  };

  changeCheck = () => {
    this.setState( {isChecked: !this.state.isChecked} )
  }

  // Object
  addObject = (key, value, evt) => {
    // this.setState( {user: {...this.state.user, [key]:value}})
    const obj = {
      ...this.state.user,
      [key]: value
    };
    this.setState( {user: obj} );
  }

  updateObject = (key, value, evt) => {
    // this.setState( {user: {...this.state.user, [key]:value}})
    const obj = {
      ...this.state.user,
      [key]: value
    };
    this.setState( {user: obj} );
  }
  deleteObject = (key) => {
    delete this.state.user[key];
    const obj = {...this.state.user}
    this.setState( {user: obj} );
  }

  addArray = (evt) => {
    const random = Math.ceil( Math.random() * 100 );
    const newArray = this.state.arr.concat(random);

    this.setState( {arr: newArray})
  }
  updateArray = (index, value) => {
    const newArray = this.state.arr.map( (item, i) => index === i ? value : item );
    this.setState( {arr: newArray} );
  }
  deleteArray = (index) => {
    const newArray = this.state.arr.filter( (item, i) => index !== i );
    this.setState( {arr: newArray} );
  }

  render() {
    return (
      <div>
        <h3>A02 Class State [mutable]</h3>

        <div>
          Name: {this.name} <br />
          Nickname: {this.state.nickname}<br />
          Age: {this.state.age + 100}<br />
          User: {this.state.user.name} / {this.state.user.age} / {this.state.user.address} <br />
          Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
          isChecked: {this.state.isChecked ? 'TRUE' : 'FALSE'}
        </div>

        <div>
          { this.state.arr.map( (item, index) => <span key={index}>{item}{' '}</span>) }
        </div>

        <div>
          <button onClick={this.changeN}>NAME</button>
          <button onClick={this.changeNickname}>NICKNAME</button>
          <button onClick={this.changeAge}>AGE</button>
          <button onClick={this.changeCheck}>CHECK</button><br />

          <button onClick={ (evt) => this.addObject('address', 'Seoul', evt)}>AddObject</button>
          <button onClick={ (evt) => this.updateObject('address', 'Busan', evt)}>UpdateObject</button>
          <button onClick={ () => this.deleteObject('address') }>DeleteObject</button>

          <button onClick={this.addArray}>AddArray</button>
          <button onClick={ () => this.updateArray(1, 1000) }>UpdateArray</button>
          <button onClick={ () => this.deleteArray(1) }>DeleteArray</button>

        </div>
      </div>
    )
  }
}

export default A02ClassState