
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const A05Hook = () => {

    // useState
    const [data, setData] = useState({
        num: 0,
        str: ''
    });
    const [today, setToday] = useState(new Date());
    const [num, setNum] = useState('');
    const [list, setList] = useState([]);

    // useRef
    const inputRef = useRef();

    // componentDidMount() / componentDidUpdate => useEffect
    useEffect( () => {
        inputRef.current.style.color = 'orange';
    }, []);                 // [] 의존 관계가 없으면 최초 1번만 실행 => componentDidMount

    useEffect( () => {
        setTimeout( () => {
            setToday(new Date());
        }, 2000);
    }, [data]);             // [data] data 변수가 변경되면 새롭게 등록 => componentDidUpdate


    // useCallback
    // 이벤트의 콜백 함수를 어느 경우만 새롭게 갱신할 것인가를 결정
    const changeData = useCallback( 
        (evt) => setData( {...data, [evt.target.name]: evt.target.value} )
    , [data]);
    const changeNumer = useCallback(
        (evt) => {
            let value = Number(evt.target.value);
            if(isNaN(value)) value = 0;

            setNum(value);
        }, []
    )
    const addList = useCallback(
        () => setList( list.concat(num) )
    , [list, num])

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
        return getAverage(list);
    }, [list]);

    return (
        <div>
            <h3>A05. useState, useEffect</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" ref={inputRef}
                        value={data.num} onChange={changeData} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control" 
                        value={data.str} onChange={changeData} /><br />

                Today: {today.toLocaleString()}<br />
                <br />

                Avg: {num} / {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"
                            value={num} onChange={changeNumer}/>
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default A05Hook
