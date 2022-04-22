
import React, { useEffect, useRef, useState } from 'react'

function A04CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];
    // let cnt = 4;         // 리 렌더링 될때 새롭게 초기화가 된다.

    // 값을 유지할 목적 => ()에 값을 할당
    // DOM에 접근할 목적 => ()에 값 없음. => createRef()
    // 2가지 형태로 사용된다. 값은 변수명.current로 참조
    const cnt = useRef(4);
    const inputRef = useRef();

    // componentDidMount
    useEffect( () => {
        inputRef.current.style.background = 'orange';
    }, []);

    const [baseObject, setBaseObject] = useState([
        {id: 1, team: 'NC', value: 'NC'},
        {id: 2, team: '두산', value: 'Doosan'},
        {id: 3, team: '엘지', value: 'LG'},
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        team:'',
        isChecked: false,
    });

    const changeValue = (evt) => setData({...data, [evt.target.name]: evt.target.value});
    const addTeam = () => setBaseObject(baseObject.concat({id: cnt.current++, team: '삼성', value:"Samsung"}))
    const showHide = () => setData({...data, isChecked: !data.isChecked})

    return (
        <div>
            <h3>A04 Make DOM</h3>
            
            SelectBox: {data.teamOne}<br/>
            <select name="teamOne" className="form-control" onChange={changeValue} ref={inputRef}>
                <option>선택해주세요</option>
                { baseArray.map( (item, index) => <option key={index}>{item}</option>)}
            </select>

            SelectBox: {data.teamTwo}<br/>
            <select name="teamTwo" className="form-control" onChange={changeValue}>
                <option value="">선택해주세요</option>
                { baseObject.map( (item) => <option key={item.id} value={item.value}>{item.team}</option>)}
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    { baseObject.map( item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.value}</td>
                            <td>{item.team}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button><br />
            <br />
            
            { data.isChecked && 
                <div className="input-group">
                    <input type="text" className="form-control"  />
                    <button className="btn btn-outline-primary btn-sm">ADD</button>
                </div>
            }
            <br />
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A04CreateDOM
