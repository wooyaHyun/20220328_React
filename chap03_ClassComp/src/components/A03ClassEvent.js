
import React, { Component } from 'react'

export class A03ClassEvent extends Component {

    state = {
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'soccer',
        language: new Set(['Angular', 'Vue']),
        isChecked: false,
        baseball: 'NC',
        four: [],
    };

    changeName = (evt) => this.setState( {name: evt.target.value} )
    changeString = (evt) => this.setState( { [evt.target.name]: evt.target.value} );
    changeNumber = (evt) => {
        let value = Number(evt.target.value);
        if(isNaN(value)) value = 0;
        
        this.setState( { [evt.target.name]: value} );
    }
    changeCheck = () => this.setState( {isChecked: !this.state.isChecked} );
    changeLang = (evt) => {
        if(this.state.language.has(evt.target.value)) {
            this.state.language.delete(evt.target.value);
        } else {
            this.state.language.add(evt.target.value);
        };
        const newSet = new Set( Array.from(this.state.language) );      // new Set([10, 20, 30])
        this.setState( {language: newSet} );
    }
    changeSelect = (evt) => {
        const elem = evt.target.selectedOptions;                        // 유사 배열
        // console.log(elem)
        const newData = [...elem].map( item  => item.value );
        this.setState( {four: newData} );
    }

    sendData = (evt) => {
        // console.log(this.state);
        // HTML DOM이 가지고 있는 기본 JavaScript 기능을 취소한다.
        evt.preventDefault();

        const data = {
            ...this.state,
            language: Array.from(this.state.language)
        }
        
        // Ajax 요청 로직...
        console.log(data);
    }

    render() {
        return (
            <div>
                <h3>A03 Class Component Event & Form</h3>

                <form method='GET' action=''>
                    Name: {this.state.name}
                        <input type="text" name="name" className="form-control" 
                            defaultValue={this.state.name} onChange={this.changeString}/>
                    Age: {this.state.age + 100} 
                        <input type="text" name="age" className="form-control" 
                            value={this.state.age} onChange={this.changeNumber}/>
                    Date: {this.state.date}
                        <input type="date" name="date" className="form-control" 
                            value={this.state.date} onChange={this.changeString} />

                    RadioButton: {this.state.sports}<br />
                        <div className="form-check">
                            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                                onChange={this.changeString} defaultChecked={this.state.sports === 'baseball'} />
                            <label htmlFor="baseball" className="form-check-label">야구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                                onChange={this.changeString} defaultChecked={this.state.sports === 'soccer'}  />
                            <label htmlFor="soccer" className="form-check-label">축구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                                onChange={this.changeString} defaultChecked={this.state.sports === 'basketball'}  />
                            <label htmlFor="basketball" className="form-check-label">농구</label>
                        </div>

                    CheckBox One: {this.state.isChecked ? '동의' : '동의 안함'}<br />
                        <div className="form-check">
                            <input type="checkbox" id="check" className="form-check-input" 
                                value={this.state.isChecked} onChange={this.changeCheck}/>
                            <label htmlFor="check" className="form-check-label">동의</label>
                        </div>

                    CheckBox: { Array.from(this.state.language) } <br />
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input" 
                                defaultChecked={this.state.language.has('Angular')} onChange={this.changeLang} />
                            <label htmlFor="baseball" className="form-check-label">앵귤러</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                                defaultChecked={this.state.language.has('React')} onChange={this.changeLang} />
                            <label htmlFor="react" className="form-check-label">리엑트</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" 
                                defaultChecked={this.state.language.has('Vue')} onChange={this.changeLang} />
                            <label htmlFor="vue" className="form-check-label">뷰</label>
                        </div>

                    SelectBox: {this.state.baseball}<br/>
                        <select name="baseball" className="form-control" 
                            value={this.state.baseball} onChange={this.changeString}>
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    
                    SelectBox Multi: {Array.from(this.state.four) }<br />
                        <select name="four" multiple size="3" className="form-control" 
                            value={this.state.four} onChange={this.changeSelect}>
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    <br />

                    <button type="submit" onClick={this.sendData}>SEND</button>
                </form>
            </div>
        )
    }
}

export default A03ClassEvent
