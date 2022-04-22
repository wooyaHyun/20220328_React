
import React, { Component } from 'react'

export class A08LifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        };
        console.log('1. Constructor');
    }

    // Vitual DOM에 있는 props와 state를 매개변수로 받는다.
    static getDerivedStateFromProps(props, state) {
        console.log('2 getDerivedStateFromProps');

        // 두 값을 참조해서 값 변경이 필요한 경우 적절히 변경후 render에 전달
        // 화면 갱신이 이루어질때마다 실행된다.
        console.log(props, state);
        return state;
    }

    componentDidMount() {
        // DOM이 완성되고 난 후 실행.
        // Ajax 통신등이 여기서 이루어진다. 최초 1번만 실행된다
        console.log('4. componentDidMount');
    }

    shouldComponentUpdate(props, state) {
        console.log('shouldComponentUpdate');

        // props와 stage의 값을 적절히 사용해서 화면 갱신(render)을 할 것인가를 결정
        // console.log(state)
        if(state.color !== 'orange') return false
        else return true;
    }

    componentDidUpdate() {
        // state이 변경되서 화면 갱신이 완료된 후 발생
        console.log('5 componentDidUpdate')
    }

    changeColor = () => {
        this.setState({color: 'orange'})
    }

    render() {
        console.log('3. render')
        return (
            <div>
                <h3>A05 Life Cycle</h3>

                color: {this.props.color} / {this.state.color}
                <br />
                
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default A08LifeCycle
