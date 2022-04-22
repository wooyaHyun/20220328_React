
import React, { memo } from 'react'
import './css/todos.css'

function TodoListItem(props) {

    const { todo, updateTodoList, deleteTodoList } = props;

    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={()=>updateTodoList(todo.id)}>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteTodoList(todo.id)}>Delete</button>
            </td>
        </tr>
    )
}

// props가 변경된 값이 없으면 갱신 작업을 하지 않는다.
export default memo(TodoListItem)
