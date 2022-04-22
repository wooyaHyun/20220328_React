
import React from 'react'
import { Link } from 'react-router-dom';

const GetContactList = (props) => {

    const { contactList, getContact } = props;

    const goURL = (no) => {
        getContact(no);
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    { contactList.contacts && contactList.contacts.map( contact => (
                        <tr key={contact.no}>
                            <td>{contact.no}</td>
                            <td><Link to="#" onClick={()=>goURL(contact.no)}>{contact.name}</Link></td>
                            <td>{contact.tel}</td>
                            <td>{contact.address}</td>
                            <td><img src={contact.photo} alt="증명사진" width="50px" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetContactList
