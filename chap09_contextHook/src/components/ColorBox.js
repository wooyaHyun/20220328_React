
import React, { useContext } from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorContext } from './../modules/SelectColorContext'

function ColorBox() {
    
    const {color, moduleName} = useContext(ColorBoxContext);
    const {state} = useContext(SelectColorContext);

    return (
        <div>
            <div>value에 Provider가 제공하는 값을 참조하는 참조 변수</div>
            <div>
                <h3>{moduleName}</h3>
                <div style={{width: "50px", height: "50px", background: color}}></div>
                <hr/>

                <h3>{state.color} / {state.bgColor}</h3>
                <div style={{width: "50px", height: "50px", background: state.color}}></div>
                <hr />
                
            </div>
        </div>
        
    )
}

export default ColorBox
