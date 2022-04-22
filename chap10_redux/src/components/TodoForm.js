
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodoAction, changeTextAction } from './../modules/todoListR'

function TodoForm(props) {

    const { text, addTodo, changeText } = props;

    const inputRef = useRef();

    const sendData = (evt) => {
        evt.preventDefault();
        inputRef.current.focus();
        addTodo(text);
        changeText('');
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputRef} 
                    value={text} onChange={ (evt) => changeText(evt.target.value) }/>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData} >Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default connect(
    state => ({
        text: state.todoListR.text
    }),
    dispatch => ({
        addTodo: (text) => dispatch(addTodoAction(text)),
        changeText: (text) => dispatch(changeTextAction(text))
    })
)(TodoForm)