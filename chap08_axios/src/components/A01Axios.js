
import React, { useState } from 'react'
import axios from 'axios'

function A01Axios() {
    
    const baseURL = 'http://localhost:8090/contacts/';
    // const baseURL = 'http://sample.bmaster.kro.kr/';

    const [data, setData] = useState();

    const getContectList = () => {
        axios.get(baseURL, {params: {pageno:1, pagesize: 10}})
        .then( resp => {
            console.log(resp.data);
            setData(resp.data);
        })
        .catch( error => console.error(error) )
    };
    const getContectListAsync = async() => {
        try {
            const resp = await axios.get(baseURL, {params: {pageno:2, pagesize: 5}})
            setData(resp);
        } catch(error) {
            console.error(error) 
        }
    };
    const getContact = (no) => {
        axios({
            method: 'GET',
            url: baseURL + no,
        })
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    }
    const addContact = () => {
        const data = {
            "name":"강감찬",
            "tel":"010-2222-3339",
            "address":"서울시"
        }

        axios({
            method: 'POST',
            url: baseURL,
            data: data
        })
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    }
    const updateContact = (no) => {
        const data = {
            "name":"이순신",
            "tel":"010-1111-3339",
            "address":"서울시"
        }

        axios({
            method: 'PUT',
            url: baseURL + no,
            data: data
        })
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    }
    const deleteContact = (no) => {
        axios({
            method: 'DELETE',
            url: baseURL + no,
            data: data
        })
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    }
    
    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button onClick={getContectList}>DATA LIST</button>
            <button onClick={getContectListAsync}>DATA LIST ASYNC</button>
            <button onClick={()=>getContact(50)}>GET</button>
            <button onClick={addContact}>ADD</button>
            <button onClick={() => updateContact(1648709435684)}>UPDATE</button>
            <button onClick={() => deleteContact(1648709435684)}>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" defaultValue={ JSON.stringify(data, '', 4) }></textarea>
        </div>
    )
}

export default A01Axios
