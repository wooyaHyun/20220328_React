// A02ClassComp.js
import React from 'react'

class A02ClassComp extends React.Component {
  
  constructor() {
    super();

    this.name = 'NolBu';      // 값이 변경되도 화면 갱신은 되지 않는다.
  }
  render(){
    return (
      <div>
        <h3>A02 Class Component</h3>

        <div>
          Name: {this.name}<br />
        </div>
      </div>
    )
  }
}
export default A02ClassComp;
