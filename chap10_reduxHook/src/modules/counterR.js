import { createAction, handleActions } from 'redux-actions'

const COUTER_INCREASE = 'COUTER_INCREASE';
const COUTER_DECREASE = 'COUTER_DECREASE';

export const increaseAction = createAction(COUTER_INCREASE, num => num);    // type과 값을 payload 속성에 담아 전달
export const decreaseAction = createAction(COUTER_DECREASE);

const init = {
  num: 0,
  moduleName: 'Counter Reducer'
}
const counterR = handleActions({
  [COUTER_INCREASE]: (state, action) => {
    return {...state, num: state.num + action.payload}
  },
  [COUTER_DECREASE]: (state, action) => ( {...state, num: state.num - 1} )
}, init);
export default counterR;
