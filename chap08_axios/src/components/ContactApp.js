import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';
import axios from 'axios'

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
import ContactGetList from './Contact/ContactGetList'

function ContactApp() {

    const baseURL = 'http://localhost:8090/contacts/';
    const history = useHistory();

    const [contactList, setContactList] = useState({
        pageno: 0,
        pagesize: 0,
        totalcount: 0,
        contacts: []
    });
    const [contact, setContact] = useState({
        name: '',
        tel: '',
        address: ''
    });

    const getContectList = () => {
        axios.get(baseURL, {params: {pageno:1, pagesize: 10}})
        .then( resp => {
            // console.log(resp.data)
            setContactList(resp.data);
        })
        .catch( error => console.error(error) )
    };
    const getContact = (no) => {
        axios.get(baseURL + no)
        .then( resp => {
            setContact(resp.data) 
            history.push('/getContact');
        })
        .catch( error => console.error(error) )
    }
    const addContact = (data) => {
        axios({
            method: 'POST',
            url: baseURL,
            data: data
        })
        .then( resp => {
            // console.log(resp.data);
            history.push('/getContactList');
            getContectList();
        })
        .catch( error => console.error(error) )
    }
    const deleteContact = (no) => {
        axios.delete(baseURL + no)
        .then( resp => {
            // console.log(resp.data);
            history.push('/getContactList');
            getContectList();
        })
        .catch( error => console.error(error) )
    }

    const viewUpdate = () => history.push('/updateContact');
    const updateContact = (data) => {
        axios({
            method: 'PUT',
            url: baseURL + data.no,
            data: data
        })
        .then( resp => {
            // console.log(resp.data);
            history.push('/getContactList');
            getContectList();
        })
        .catch( error => console.error(error) )
    }

    useEffect( () => {
        getContectList();
    }, [])

    return (
        <div>
            <ContactHeader />
            <br />
            
            <Switch>
                <Route path="/"                 component={ContactHome}         exact/>
                <Route path="/getContactList"   render={ () => <ContactGetList contactList={contactList} getContact={getContact} /> } />
                <Route path="/getContact"       render={ () => <ContactGet contact={contact} deleteContact={deleteContact} viewUpdate={viewUpdate} />} />
                <Route path="/addContact"       render={ () => <ContactAdd addContact={addContact}  /> } />
                <Route path="/updateContact"    render={ () => <ContactUpdate contact={contact} setContact={setContact} updateContact={updateContact} /> } />
                <Route                          render={ () => <h3>Not Found</h3>} />
            </Switch>
        </div>
    )
}

export default ContactApp
