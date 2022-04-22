import React from 'react'

import { increaseActionAsync, decreaseActionAync } from './../modules/counterR'
import { useSelector, useDispatch } from 'react-redux'

function Counter(props) {

    const num = useSelector(state => state.counterR.num);
    const moduleName = useSelector(state => state.counterR.moduleName);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{moduleName} - Counter: {num}</h3>
            <button onClick={ () => dispatch(increaseActionAsync(1))}>+</button>        
            <button onClick={ () => dispatch(decreaseActionAync())}>-</button> 
        </div>
    )
}
export default Counter;

