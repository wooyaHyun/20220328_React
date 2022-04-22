
const COUTER_INCREASE = 'COUTER_INCREASE';
const COUTER_DECREASE = 'COUTER_DECREASE';

export const increaseAction = (num) => {
  return {type: COUTER_INCREASE, payload: num}
}
export const decreaseAction = () => ({type: COUTER_DECREASE})

const init = {
  num: 0,
  moduleName: 'Counter Reducer'
}
function counterR(state = init, action) {
  switch(action.type) {
    case COUTER_INCREASE: 
      return {...state, num: state.num + action.payload}
    case COUTER_DECREASE: 
      return {...state, num: state.num - 1}
    default:
      return state;
  }
}
export default counterR;
