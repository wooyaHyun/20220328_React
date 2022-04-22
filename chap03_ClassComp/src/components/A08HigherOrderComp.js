
import React, { Component } from 'react'
import A08WithComp from './A08WithComp'

export class A08HigherOrderComp extends Component {
    render() {
        
        return (
            <div>
                <h3>A08 Higher Order Component</h3>
                props.name: {this.props.name}<br />
                Address: {this.props.address}<br />

                <button onClick={this.props.changeAddress}>Address</button>
            </div>
        )
    }
}

export default A08WithComp(A08HigherOrderComp);
