/**
 * 这里定义 action 的 具体方法
 */

import {
    CHANGE_WORK,
    CHANGE_HEAD,
    REQUEST_NEWS,
    REQUESTING,
    REQUEST_SUCCESS,
    REQUEST_ERROR
} from './actionTypes'

export function changework(text) {
    return {
        type: CHANGE_WORK,
        text
    }
}

export function changehead(text) {
    return {
        type: CHANGE_HEAD,
        text
    }
}

export function requestingnews() {
    return {
        type: REQUEST_NEWS,
        status: REQUESTING
    }
}

export function requestnewssuccess(jsondata) {
    return {
        type: REQUEST_NEWS,
        status: REQUEST_SUCCESS,
        response: jsondata
    }
}

export function requestnewserror(code) {
    return {
        type: REQUEST_NEWS,
        status: REQUEST_ERROR,
        errorcode: code
    }
}