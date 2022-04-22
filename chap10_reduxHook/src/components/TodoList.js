
import React from 'react'
import { useSelector } from 'react-redux';
import './css/todos.css';
import TodoListItem from './TodoListItem'

function Todolist(){
    
    const { todoList } = useSelector(state => state.todoListR);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { todoList.map( todo => <TodoListItem key={todo.id} todo={todo} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Todolist;

/*
(function(){

})();

function Outer() {
    return function inner(x) {}
}
Outer()('abc')
*/