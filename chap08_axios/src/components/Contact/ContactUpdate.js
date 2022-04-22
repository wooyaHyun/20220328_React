
import React, { useCallback } from 'react'

function AddContact( props ) {
    
    const { contact, setContact, updateContact } = props;

    const changeContact = useCallback(
        (evt) => setContact( contact => ({...contact, [evt.target.name]: evt.target.value}))
    , [setContact]);

    const sendData = () => {
        updateContact(contact);
    }

    return (
        <div>
            <h3>Update Contact</h3>

            <div>
                Name: <input type="text" className="form-control" name="name" 
                    value={contact && contact.name} onChange={changeContact} />
                Tel: <input type="text" className="form-control" name="tel"
                    value={contact && contact.tel} onChange={changeContact}  />
                Address: <input type="text" className="form-control" name="address"
                    value={contact && contact.address} onChange={changeContact}  />
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={sendData}>ADD</button>
        </div>
    )
}

export default AddContact
