// npm i node-sass
// react-script 4.X.X => node-sass@6
// react-script 5.X.X => node-sass@7
import React, { useState } from 'react'
import './css/A01Style.css';
import './css/A01Style.scss'        // 기본적으로는 지원 안함. node-sass 설치가 필요(리 스타트 필요)

function A01Style() {

    const color = 'title color';
    const [check, setCheck] = useState(true);
    const style = {
        backgroundColor: 'aqua',
        color: 'black',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px'
    }

    return (
        <div>
            <h3 className='title color'>A01 Style</h3>
            <h3 className={'title color'}>A01 Style</h3>
            <h3 className={color}>A01 Style</h3>
            <h3 className={check ? 'title color' : ''}>A01 Style</h3>
            <h3 className="scssTitle">A01 Style</h3>

            <h3 style={style}>A01 Style</h3>
            {/* 첫번째는 바인딩 {} 내부에 객체 {}가 필요하다 */}
            <h3 style={ {
                    backgroundColor: 'aqua',
                    color: 'black',
                    fontSize: '24pt',
                    fontWeight: 'bold',
                    padding: '20px'
                } }>A01 Style</h3>
        </div>
    )
}

export default A01Style
