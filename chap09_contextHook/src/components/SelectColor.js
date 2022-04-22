
import React, { useContext } from 'react'
import { SelectColorContext } from './../modules/SelectColorContext'

function SelectColor() {
    const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
    const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

    const { state, action } = useContext(SelectColorContext);
    
    return (
        <div>
            <div style={{display: 'flex'}}>
                { colors.map( color => <div key={color} style={ {...style, background: color} }
                    onClick={()=>action.setColor(color)}>{color}</div>)}
            </div>
            <div>{state.color} / {state.bgColor}</div>
        </div>
    )
}

export default SelectColor
