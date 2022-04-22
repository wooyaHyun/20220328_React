
import React from 'react'

// module 형태로 CSS 파일을 import
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
    return (
        <div>
            {/* innerColor는 :global 옵션으로 일반 CSS 파일로 정의 */}
            <h3 className={one.title}>A02 Style <span className='innerColor'>Module</span> Component</h3>
            <h3 className={two.title}>A02 Style Module Component</h3>
            <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
            <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
        </div>
    )
}

export default A02StyleModule;
