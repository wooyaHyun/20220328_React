
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {addContactAction} from './../../modules/contactR'

function AddContact() {

    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        tel: '',
        address: ''
    });
    const changeData = (evt) => setData({...data, [evt.target.name]: evt.target.value});

    const dispatch = useDispatch();

    const sendData = () => {
        dispatch(addContactAction(data))
        history.push('/proceed');
    }

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name" value={data.name} onChange={changeData} />
            Tel: <input type="text" className="form-control" name="tel" value={data.tel} onChange={changeData} />
            Address: <input type="text" className="form-control" name="address" value={data.address} onChange={changeData} />
            <br />
            <button className="btn btn-outline-primary" onClick={sendData}>ADD</button>
        </div>
    )
}

export default AddContact
