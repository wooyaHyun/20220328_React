
import React, { useEffect, useState } from 'react'

function AddContact(props) {

    const { addContact } = props;
    const [contact, setContact] = useState({
        name: '',
        tel: '',
        address: ''
    });
    const changeContact = (evt) => setContact({...contact, [evt.target.name]: evt.target.value})
    const sendData = () => {
        if(contact.name.trim().length !== 0) {
            addContact(contact);
        }
    }

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name"
                value={contact.name} onChange={changeContact} />
            Tel: <input type="text" className="form-control" name="tel" 
                value={contact.tel} onChange={changeContact}/>
            Address: <input type="text" className="form-control" name="address"
                value={contact.address} onChange={changeContact} />
            <br />
            <button className="btn btn-outline-primary" onClick={sendData}>ADD</button>
        </div>
    )
}

export default AddContact
