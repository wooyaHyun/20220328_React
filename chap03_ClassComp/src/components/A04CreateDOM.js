
import React, { Component, createRef } from 'react'

export class A05CreateDOM extends Component {

    constructor(props) {
        super(props);
        this.cnt = 4;
        this.baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

        // DOM 요소의 참조 변수를 정의. JavaScript 객체를 리턴해 준다
        this.inputRef = createRef();
        
    }

    componentDidMount() {
        console.log(this.inputRef.current);
        this.inputRef.current.style.background = 'orange'
    }

    state = {
        teamOne: '',
        teamTwo: '',
        team: '',
        isChecked: true,
        baseObject:[
            {id: 1, team: 'NC', value: 'NC'},
            {id: 2, team: '두산', value: 'Doosan'},
            {id: 3, team: '엘지', value: 'LG'},
        ]
    };

    makeDOM = () => this.state.baseObject.map( item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.team}</td>
            <td>{item.value}</td>
        </tr>
    ))

    changeValue = (evt) => this.setState({[evt.target.name]: evt.target.value});
    addTeam = () => this.setState({baseObject: this.state.baseObject.concat({id: this.cnt++, team: '삼성', value:"Samsung"})});
    showHide = () => this.setState({isChecked: !this.state.isChecked});

    addArray = () => {
        this.baseArray.push(this.state.team);
        this.forceUpdate();                     // 강제 화면 갱신
    }

    render() {
        return (
            <div>
                <h3>A04 Make DOM</h3>
                
                SelectBox: {this.state.teamOne}<br/>
                <select name="teamOne" className="form-control" onChange={this.changeValue}>
                    <option>선택해주세요</option>
                    { this.baseArray.map( (item, index) => <option key={index}>{item}</option>) }
                </select>

                SelectBox: {this.state.teamTwo}<br/>
                <select name="teamTwo" className="form-control" onChange={this.changeValue}>
                    <option value="">선택해주세요</option>
                    { this.state.baseObject.map( item => <option key={item.id} value={item.value}>{item.team}</option>) }
                </select>

                <table className="table">
                    <thead>
                        <tr>
                            <th>NO</th><th>Team</th><th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.makeDOM()}
                    </tbody>
                </table>
                <button className="btn btn-outline-primary btn-sm" onClick={this.addTeam}>ADD TEAM</button><br />
                <br />

                { this.state.isChecked &&
                    <div className="input-group">
                        <input type="text" className="form-control" name="team" ref={this.inputRef}
                            value={this.state.team} onChange={this.changeValue} />
                        <button className="btn btn-outline-primary btn-sm"
                            onClick={this.addArray}>ADD</button>
                    </div>
                }
                <br />
                
                <button className="btn btn-outline-primary btn-sm" onClick={this.showHide}>{this.state.isChecked ? 'HIDE' : 'SHOW'}</button>
            </div>
        )
    }
}

export default A05CreateDOM
