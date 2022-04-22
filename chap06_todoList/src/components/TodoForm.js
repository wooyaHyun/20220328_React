
import React, { useCallback, useRef, useState } from 'react'

function TodoForm(props) {

    const inputRef = useRef();

    const { addTodoList } = props;
    const [text, setText] = useState('');
    const changeText = useCallback( (evt) => setText(evt.target.value), []);

    const sendData = useCallback( (evt) => {
        evt.preventDefault();
        addTodoList(text);
        setText('');
        inputRef.current.focus();
    }, [text, setText, addTodoList]);

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputRef}
                    value={text} onChange={changeText} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm