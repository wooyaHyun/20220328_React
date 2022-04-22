
import React, { useEffect, useMemo, useReducer } from 'react'

// state => data 값
// action => dispatch()로 전달된 값이 넘어온다
function hookReducer(state, action) {
    // data 값을 적절히 변경해서 리턴
    // console.log(state);
    // console.log(action);
    switch( action.type ) {
        case 'CHANGE_NUM':
            let value = Number(action.payload.value);
            if(isNaN(value)) value = 0;
            return {...state, [action.payload.name]: value}
        case 'CHANGE_STR':
            return {...state, str: action.payload}
        case 'CHANGE_TODAY':
            return {...state, today: action.payload}
        case 'ADD_LIST':
            return {...state, list: state.list.concat(action.payload)}      // state.cnt
        default:
            return state;
    }
}

const A06Hook = () => {

    // const [data, setData] = useState({})
    // dispatch는 지정된 hookReducer를 호출하는 함수
    const [data, dispatch] = useReducer(hookReducer, {
        num: 0,
        str: '',
        today: new Date(),
        cnt: 0,
        list: []
    });

    const changeNumber = (evt) => dispatch( {type: 'CHANGE_NUM', payload: evt.target} );
    const addList = () => dispatch( {type: 'ADD_LIST', payload: data.cnt} );

    useEffect(() => {
        setTimeout(() => {
            dispatch( {type: 'CHANGE_TODAY', payload: new Date()} )
        }, 2000);
    }, []);

    // 평균 구하기
    const getAverage = (arr) => {
        console.log('...계산중');
        if(arr.length === 0) return 0;
        const total = arr.reduce( (x, y) => x + y );
        return total / arr.length;
    }

    // useMemo => 일반 함수가 리 렌더링 될때마다 실행하지 않고 관련된 변수가 변경될 경우만 새롭게 생성
    // 일반적인 함수를 이용하는 경우.
    const getAverageMemo = useMemo( () => {
        return getAverage(data.list);
    }, [data]);

    return (
        <div>
            <h3>A06. Reducer</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" 
                        value={data.num} onChange={changeNumber} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control" 
                        value={data.str} onChange={ (evt) => dispatch( {type: 'CHANGE_STR', payload: evt.target.value} )}/><br />

                Today: {data.today.toLocaleString()}<br />
                <br />

                Avg: {data.cnt} / {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="cnt" className="form-control" 
                            value={data.cnt} onChange={changeNumber}/>
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
            </div>
        </div>
    )
}

export default A06Hook
