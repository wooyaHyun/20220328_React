
import React, { PureComponent } from 'react'

export class A06PureComponent extends PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'NolBu',
            ary: ['React', 'Angular', 'Vue']
        }
    }

    changeName = () => {
        this.setState({name: 'NolBu'});
    }
    changeObject = () => {
        this.setState({ary: ['React', 'Angular', 'Vue']})
    }

    /*
    // PureComponent는 이 메서드가 이미 정의되어 있는 상태라 재 정의를 할 수 없다.
    shouldComponentUpdate(props, state) {
        return true;
    }
    */

    render() {
        console.log("---------- render() Method ----------")
        return (
            <div>
                <h3>A06 PureComponent</h3>

                <div>
                    Name: {this.state.name} <br />
                    Ary: {this.state.ary[0]}<br />

                    <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
                    <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
                </div>
            </div>
        )
    }
}

export default A06PureComponent
