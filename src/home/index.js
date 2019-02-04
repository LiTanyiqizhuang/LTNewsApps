import {changetest, getnews} from './reducer'
import {combineReducers} from 'redux'

const appReducer = combineReducers ({
    changetest,
    getnews,
})

export default appReducer
