/**
 * 实现具体的reducer方法，操作具体的数据变动
 */
import {
    CHANGE_WORK,
    CHANGE_HEAD,
    REQUEST_NEWS,
    REQUESTING,
} from './actionTypes'

export function changetest(state = {
    work: "",
    head: ""
}, action) {
    switch (action.type) {
        case CHANGE_WORK:
            return {
                ...state,
                work: action.text
            }
        case CHANGE_HEAD:
            return {
                ...state,
                head: action.text
            }
        default:
            return state
    }
}

export function getnews(state = {
    type: REQUEST_NEWS,
    status: REQUESTING,
    response: [],
    errorcode: 0
}, action) {
    let {status, response, errorcode} = action
    if(!status) status = state.status
    if(!response) response = state.response
    if(!errorcode) errorcode = state.errorcode

    return {
        ...state,
        type: action.type,
        status: status,
        response: response,
        errorcode: errorcode
    }
}