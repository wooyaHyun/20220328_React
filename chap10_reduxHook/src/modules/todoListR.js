import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'         // npm i immer

const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';


export const addTodoAction = createAction(TODOLIST_ADDTODO, text => {
    const todo = {id: cnt++, text, done: false};
    return todo;
});
export const updateTodoAction = createAction(TODOLIST_UPDATETODO, id=>id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, id=>id);
export const changeTextAction = createAction(TODOLIST_CHANGETEXT, text=>text);

const makeTodo = () => {
    const todos = [];
    for(var i = 1; i <= 5; i++) {
        todos.push({id: i, text: `${i}번째 할 일 `, done: false})
    }
    return todos;
};

let cnt = 6;

const init = {
    todoList: makeTodo(),
    text: ''
}
const todoListR = handleActions({
    [TODOLIST_ADDTODO]: (state, action) => {
        const newState = produce(state, draft => {
            draft.todoList.push(action.payload);
        });
        return newState
    },
    [TODOLIST_UPDATETODO]: (state, action) => {
        const index = state.todoList.findIndex( todo => todo.id === action.payload );
        const newState = produce(state, draft => {
            draft.todoList[index].done = !draft.todoList[index].done
        });
        return newState
    },
    [TODOLIST_DELETETODO]: (state, action) => {
        const index = state.todoList.findIndex( todo => todo.id === action.payload );
        const newState = produce(state, draft => {
            draft.todoList.splice(index, 1);
        });
        return newState
    },
    [TODOLIST_CHANGETEXT]: (state, action) => {
        return {...state, text: action.payload}
    }
}, init);

export default todoListR;