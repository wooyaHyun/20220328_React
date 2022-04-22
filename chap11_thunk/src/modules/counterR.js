
import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER/INCREASE';
const COUNTER_DECREASE = 'COUNTER/DECREASE'; 

const increaseAction = createAction(COUNTER_INCREASE, (num) => num);
export const increaseActionAsync = (num) => (dispatch) => {
    setTimeout(()=>{
        // return 100
        dispatch(increaseAction(num + 100))
    }, 1000);
}
export const decreaseAction = createAction(COUNTER_DECREASE);
export const decreaseActionAync = () => (dispatch) => {
    setTimeout(()=>{
        dispatch({type: COUNTER_DECREASE})
    }, 500);
}
const init = {
    num: 0,
    moduleName: 'Counter Module',
}

const counterR = handleActions({
    [COUNTER_INCREASE]: (state, action) => ({...state, num: state.num + action.payload}),
    [COUNTER_DECREASE]: (state, action) =>({...state, num: state.num - 1})
}, init);
export default counterR;
