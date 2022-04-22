
const init = {
  num: 0,
  moduleName: 'Counter Reducer'
}
function counterR(state = init, action) {
  switch(action.type) {
    case 'COUTER_INCREASE': 
      return {...state, num: state.num + action.payload}
    case 'COUTER_DECREASE': 
      return {...state, num: state.num - 1}
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, '');
  // console.log(state);

  const getState = () => {
    return {...state};
  }

  const dispatch = (action) => {
    state = reducer(state, action)
  }

  return {getState, dispatch}
}

const store = createStore(counterR)
console.log(store.getState());

store.dispatch({type: 'COUTER_INCREASE', payload: 10});
console.log(store.getState());
