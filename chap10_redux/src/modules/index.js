// index.js

import {combineReducers} from 'redux'
import counterR from './counterR'
import todoListR from './todoListR'

const modules = combineReducers({
  counterR, todoListR
});
export default modules;

