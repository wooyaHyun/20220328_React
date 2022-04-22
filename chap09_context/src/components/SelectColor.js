
import React from 'react'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function SelectColor() {
    const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
    const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

    return (
        <SelectColorContextConsumer>
            { value => (
                <div>
                    <div style={{display: 'flex'}}>
                        { colors.map( color => <div key={color} style={ {...style, background: color} }
                            onClick={()=>value.action.setColor(color)}>{color}</div>)}
                    </div>
                    <div>{value.state.color} / {value.state.bgColor}</div>
                </div>
            )}
        </SelectColorContextConsumer>
    )
}

export default SelectColor
