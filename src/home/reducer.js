/**
 * 实现具体的reducer方法，操作具体的数据变动
 */
import {CHANGE_WORK, CHANGE_HEAD} from './actionTypes'

function changetest (state = {work: "", head: ""}, action) {
    switch (action.type) {
        case CHANGE_WORK:
            return {
                ...state, work: action.text
            }
        case CHANGE_HEAD:
            return {
                ...state, head: action.text
            }
        default:
            return state
    }
}

export default changetest