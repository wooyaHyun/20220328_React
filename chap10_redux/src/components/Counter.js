import React from 'react'
import { connect } from 'react-redux'
import {increaseAction, decreaseAction} from './../modules/counterR'
function Counter(props) {

    const { num, moduleName, increase, decrease } = props;

    return (
        <div>
            <h3>{moduleName}: {num}</h3>
            <button onClick={() => increase(2)}>+</button>        
            <button onClick={decrease}>-</button> 
        </div>
    )
}

export default connect(
    // 선언된 값을 HOC의 props로 전달한다
    // 변수의 값 가져오기
    state => {
        return {
            num: state.counterR.num, 
            moduleName: state.counterR.moduleName
        }
    },
    // 메서드 값 가져오기
    dispatch => ({
        increase: (num) => dispatch(increaseAction(num)),
        decrease: () => dispatch(decreaseAction())
    })
)(Counter)
