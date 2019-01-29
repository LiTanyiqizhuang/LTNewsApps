/**
 * 这里定义 action 的 具体方法
 */
import {CHANGE_WORK, CHANGE_HEAD} from './actionTypes'

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

