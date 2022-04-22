import { createContext, useCallback, useRef, useState } from 'react'

const TodoListContext = createContext({
  state: {
    todoList: [],
    text: ''
  },
  action: {
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    changeText: () => {}
  }
});

function makeTodo() {
  const todos = [];
  for(let i = 1; i <= 5; i++) {
    todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
  }
  return todos;
};

function TodoListProvider(props) {
  const [todoList, setTodoList] = useState(makeTodo());
  const [text, setText] = useState('');
  const cnt = useRef(6);

  const addTodo = useCallback( (text) => {
    const todo = {id: cnt.current++, text: text, done: false};
    setTodoList( todoList => todoList.concat(todo) );
  }, []);
  const updateTodo = useCallback( (id) => {
    setTodoList( todoList => todoList.map( todo => todo.id === id ? {...todo, done: !todo.done} : todo ) )
  }, []);
  const deleteTodo = useCallback( (id) => {
    setTodoList( todoList => todoList.filter( todo => todo.id !== id) )
  }, []);
  const changeText = useCallback( (text) => setText(text), []);

  const value = {
    state: {todoList, text},
    action: {addTodo, updateTodo, deleteTodo, changeText}
  }
  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  )
}
const TodoListConsumer = TodoListContext.Consumer;

export { TodoListProvider, TodoListConsumer }