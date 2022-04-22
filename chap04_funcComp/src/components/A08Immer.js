// npm i immer
import React, { useState } from 'react'
import produce from 'immer'

function A08Immer() {
    const [person, setPerson] = useState({
        name: '',
        info: {
            address: '',
            tel: [10, 20, 30],
            etc: {
                one: '',
                two: ''
            }
        }
    });

    const changeName = (data) => setPerson( {...person, name: data} );
    const changeAddress = () => {
        const data = {
            ...person,
            info: {
                ...person.info,
                address: 'Seoul'
            }
        }
        console.log(data === person);
        console.log(data.info === person.info)

        setPerson(data);
    }
    const changeOne = () => {
        const data = {
            ...person,
            info: {
                ...person.info,
                etc: {
                    ...person.info.etc,
                    one: '복잡하네...'
                }
            }
        };
        setPerson(data);
    }
    const addArray = () => {
        const num = Math.ceil( Math.random() * 100 );
        const data = {
            ...person,
            info: {
                ...person.info,
                tel: person.info.tel.concat(num)
            }
        }
        setPerson(data);
    }

    // immer
    const changeNameImmer = (value) => {
        const data = produce(person, draft => {
            // 객체는 . 연산자로 연결해서 사용. 변경하면 변경된 새로운 객체를 리턴해 준다.
            draft.name = value;
        });
        setPerson(data);
    }
    const changeAddressImmer = () => {
        const data = produce(person, draft => {
            draft.info.address = 'Busan';
        });
        setPerson(data);
    }
    const changeOneImmer = () => {
        const data = produce(person, draft => {
            draft.info.etc.one = '간단하네...';
        });
        setPerson(data);
    }

    const addArrayImmer = () => {
        const num = Math.ceil( Math.random() * 100 );
        const data = produce(person, draft => {
            draft.info.tel.push(num);                   // push, pop, shift, unshift 사용
        });
        setPerson(data);
    }
    const updateArrayImmer = (index, value) => {
        const data = produce(person, draft => {
            draft.info.tel[index] = value;
        });
        setPerson(data);
    }
    const deleteArrayImmer = (index) => {
        const data = produce(person, draft => {
            draft.info.tel.splice(index, 1);
        });
        setPerson(data);
    }

    return (
        <div>
            <h3>A08. Immer</h3>
            
            Name: {person.name}<br />
            Address: {person.info.address}<br />
            One: {person.info.etc.one}<br />
            Ary: {person.info.tel.map( (item, i) => <span key={i}>{item} </span>)}

            <br />
            <button onClick={ () => changeName('NolBu') }>Name</button>
            <button onClick={changeAddress}>Address</button>
            <button onClick={changeOne}>One</button>
            <button onClick={addArray}>ADD</button>
            <br />

            <button onClick={ () => changeNameImmer('HungBu')}>Name</button>
            <button onClick={changeAddressImmer}>Address</button>
            <button onClick={changeOneImmer}>One</button>

            <button onClick={addArrayImmer}>ADD</button>
            <button onClick={ () => updateArrayImmer(0, 1000)}>UPDATE</button>
            <button onClick={ () => deleteArrayImmer(0) }>DELETE</button>
        </div>
    )
}

export default A08Immer
