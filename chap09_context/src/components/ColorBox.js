
import React from 'react'
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorContextConsumer } from './../modules/SelectColorContext'

function ColorBox() {
    return (
        <div>
            <div>value에 Provider가 제공하는 값을 참조하는 참조 변수</div>
            <ColorBoxContext.Consumer>
                { value => (
                    <SelectColorContextConsumer>
                        { data => (
                            <div>
                                <h3>{value.moduleName}</h3>
                                <div style={{width: "50px", height: "50px", background: value.color}}></div>
                                <hr/>

                                <h3>{data.state.color} / {data.state.bgColor}</h3>
                                <div style={{width: "50px", height: "50px", background: data.state.color}}></div>
                                <hr />
                                
                            </div>
                        )}
                    </SelectColorContextConsumer>
                    
                )}
            </ColorBoxContext.Consumer>
        </div>
        
    )
}

export default ColorBox
