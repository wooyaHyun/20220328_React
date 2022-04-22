// ContactGetListContainer.js

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactGetList from './ContactGetList'
import { getContactListAction, getContactAction } from './../../modules/contactR'
import { useHistory } from 'react-router';

function ContactGetListContainer() {

  const {contactList, loading, error} = useSelector(state => state.contactR);
  const dispatch = useDispatch();

  const history = useHistory();

  const viewContact = (no) => {
    dispatch(getContactAction(no));
    history.push('/getContact');
  }

  useEffect( () => {
    dispatch( getContactListAction() )
  }, [dispatch])

  return (
    <div>
      { loading.contactList && <div>Loading....</div> }
      { error && <div>{error.message}</div> }
      { contactList && <ContactGetList contactList={contactList} viewContact={viewContact} />}
    </div>
  )
}

export default ContactGetListContainer