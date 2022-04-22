// A08WithComp.js
import React, {Component} from 'react'

// 이건 일반적인 함수.
function A08WithComp(Comp) {

  // 함수가 JSX를 이용한 사용자 정의 함수 또는 클래스를 리턴
  // return Comp;
  return class InnerComp extends Component {

    state = {
      address: 'Seoul'
    };

    changeAddress = () => this.setState({address: 'Busan'});

    render() {
      return (
        <div>
          <h3>A08 With Component</h3>
          <div>
            Name: {this.props.name}<br />
            Address: {this.state.address}<br />

            <button onClick={this.changeAddress}>Address</button>
          </div>
          <hr />

          <Comp {...this.props} 
            address={this.state.address}
            changeAddress={this.changeAddress} />

        </div>
      )
    }
  }
}
export default A08WithComp;
