
import React, { useCallback, useRef, useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5000; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());
    const cnt = useRef(5001);

    // const updateTodoList = (id) => setTodoList( todoList.map( todo => todo.id === id ? {...todo, done: !todo.done}: todo) )
    const updateTodoList = useCallback( (id) => {
        // const todos = todoList.map( todo => {
        //     if(todo.id === id ) return {...todo, done: !todo.done};
        //     else return todo;
        // });
        // setTodoList(todos);
        setTodoList( todoList => {
            const todos = todoList.map( todo => {
                if(todo.id === id ) return {...todo, done: !todo.done};
                else return todo;
            });
            setTodoList(todos);
        })
    }, []);
    const deleteTodoList = useCallback( (id) => {
        // setTodoList( todoList.filter(todo => todo.id !== id) )}
        setTodoList( todoList => todoList.filter(todo => todo.id !== id) )}
    , []);

    // const addTodoList = (text) => setTodoList( todoList.concat( {id: cnt.current++, text, done: false}) )
    const addTodoList = useCallback( (text) => {
        const todo = {id: cnt.current++, text, done: false};
        // setTodoList( todoList.concat(todo) );
        setTodoList( todoList => todoList.concat(todo) );
    }, [])


    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodoList={addTodoList} />
            <TodoList todoList={todoList} updateTodoList={updateTodoList} deleteTodoList={deleteTodoList} />
        </div>
    )
}
export default TodoTemplate;