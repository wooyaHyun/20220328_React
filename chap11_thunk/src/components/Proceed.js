
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProceedContainer() {

    const history = useHistory();
    const loading = useSelector( state => state.contactR.loading.add);

    return (
        <div>
            { loading ? <h1>처리중...</h1> : history.push('/getContactList') }
        </div>
    )
}

export default ProceedContainer
