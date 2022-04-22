
const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

// state 변경 명령은 여기서는 기술 할 수 없음(state에 대한 참조값이 없음)
// state에 적용하기 전까지의 가공 작업만 담당
export const addTodoAction = (text) => {
    const todo = {id: cnt++, text, done: false};
    return {type: TODOLIST_ADDTODO, payload: todo}
};
export const updateTodoAction = (id) => ({type: TODOLIST_UPDATETODO, payload: id});
export const deleteTodoAction = (id) => ({type: TODOLIST_DELETETODO, payload: id});
export const changeTextAction = (text) => ({type: TODOLIST_CHANGETEXT, payload: text});

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
const todoListR = (state = init, action) => {
    switch(action.type) {
        case TODOLIST_ADDTODO:
            return { ...state, todoList: state.todoList.concat(action.payload) };
        case TODOLIST_UPDATETODO:
            // const updates = state.todoList.map( todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo );
            const updates = state.todoList.map( todo => {
                if(todo.id === action.payload) return {...todo, done: !todo.done}
                else return todo;
            });
            return {...state, todoList: updates};
        case TODOLIST_DELETETODO:
            const deletes = state.todoList.filter( todo => todo.id !== action.payload );
            return {...state, todoList: deletes}
        case TODOLIST_CHANGETEXT:
            return {...state, text: action.payload}
        default: 
            return state;
    }
}
export default todoListR;