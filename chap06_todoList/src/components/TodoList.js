
import React from 'react'
import './css/todos.css';
import TodoListItem from './TodoListItem'

function Todolist(props){

    const { todoList, updateTodoList, deleteTodoList } = props;

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
                    { todoList.map( todo => <TodoListItem key={todo.id} todo={todo} updateTodoList={updateTodoList}
                        deleteTodoList={deleteTodoList} /> )}
                </tbody>
            </table>
        </div>
    )
}
export default Todolist;
