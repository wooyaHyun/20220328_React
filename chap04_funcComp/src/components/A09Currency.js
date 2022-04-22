import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function A09Currency() {

    const currencies = ['USD', 'EUR', 'CNY'];
    const rate = {'USD': 1, 'EUR': 1.34, 'CNY': 6.35};

    const [data, setData] = useState({
        qty: 3,
        cost: 5,
        inCurr: 'USD'
    });
    const qtyRef = useRef();

    useEffect( () => {
        qtyRef.current.style.background = 'orange';
        qtyRef.current.focus();
    }, []);

    const changeString = useCallback(
        (evt) => setData( {...data, [evt.target.name]: evt.target.value} )
    , [data]);
    const changeNumber = useCallback(
        (evt) => setData( {...data, [evt.target.name]: Number(evt.target.value)} )
    , [data]);

    const onTotal = () => {
        return currencies.map( item => {
            const value = (data.qty * data.cost * rate[data.inCurr] / rate[item]).toFixed(2)
            return <span key={item}>{item}: {value} {' '}</span>
        })
    }

    const onTotalMemo = useMemo( () => {
        return onTotal();
    }, [data]);

    return (
        <div>
            <h3>A09 Currency</h3>

            Qty: <input type="text" name="qty" className="form-control" ref={qtyRef}
                value={data.qty} onChange={changeNumber} />
            Cost: <input type="text" name="cost" className="form-control" 
                value={data.cost} onChange={changeNumber} />
            Country: 
                <select className="form-control" name="inCurr" 
                    value={data.inCurr} onChange={changeString}>
                    { currencies.map( item => <option key={item}>{item}</option>)}
                </select>
            <br/>

            <div>Total: {data.qty * data.cost} </div>
            <div>Total: {onTotalMemo}</div>
        </div>
    )
}

export default A09Currency;
