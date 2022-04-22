
import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'
import produce from 'immer'

const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const baseURL = 'http://localhost:8090/contacts/';
const baseLONG = 'http://localhost:8090/contacts_long/';


// Action
const getContactList = createAction(GET_CONTACTLIST_SUCCESS, data => {
    console.log(data)
    return data;
});
export const getContactListAction = () => (dispatch) => {
    // 요청전에 먼저 시작을 알리는 값을 리듀서에 비로 전달
    // 성공시와 마찬가지로 함수를 정의하고 함수를 호출해서 그 함수가 리듀서에 전달하도록 정의해도 된다(더 귀찮음)
    dispatch( {type: GET_CONTACTLIST} );

    axios.get(baseLONG, {params: {pageno: 1, pagesize: 10}})
    .then( resp => dispatch(getContactList(resp.data)) )    // 데이터 가져오기 성공시 리듀서를 호출하는 함수를 다시 실행
    .catch( error => dispatch({type: GET_CONTACTLIST_FAILURE, payload: error}) )    // 실패시에도 리듀서에 바로 전달
}
export const getContactAction = (no) => (dispatch) => {
    dispatch({type: GET_CONTACT});

    axios.get(baseURL + no)
    .then( resp => dispatch( {type: GET_CONTACT_SUCCESS, payload: resp.data} ) )
    .catch( error => dispatch({type: GET_CONTACT_FAILURE, payload: error}) )    // 실패시에도 리듀서에 바로 전달
}
export const addContactAction = (data) => (dispatch) => {
    dispatch( {type: ADD_CONTACT} )
    axios.post(baseURL, data)
    .then( resp => dispatch( {type: ADD_CONTACT_SUCCESS, payload: resp.data} ) )
    .catch( error => dispatch({type: ADD_CONTACT_FAILURE, payload: error}) )    // 실패시에도 리듀서에 바로 전달
}

const init = {
    loading: {
        contactList: false,
        contact: false,
        add: false,
    },
    contactList: null,
    contact: null,
    error: null,
}
const contactR = handleActions({
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
        return {
            ...state, 
            loading: {
                ...state.loading,
                contactList: true
            },
            contactList: null,
            error: null
        };
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                contactList: false
            },
            contactList: action.payload
        };
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                contactList: false
            },
            contactList: null,
            error: action.payload
        };
    },
    // Get
    [GET_CONTACT]: (state, action) => {
        return produce(state, draft => {
            draft.loading.contact = true;
            draft.contact = null;
            draft.error = null;
        });
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
        return produce(state, draft => {
            draft.loading.contact = false;
            draft.contact = action.payload;
        });
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
        return produce(state, draft => {
            draft.loading.contact = false;
            draft.error = action.payload;
        });
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
        return produce(state, draft => {
            draft.loading.add = true;
            draft.error = null;
        });
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
        return produce(state, draft => {
            draft.loading.add = false;
        });
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
        return produce(state, draft => {
            draft.error = action.payload;
        });
    },
}, init);
export default contactR;
