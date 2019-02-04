import HomeComponent from './homeComponent'
import { connect } from 'react-redux'
import {changework, changehead} from '../actions'
import getNewsData from '../loadnews'

const mapStateToProps = state => ({
    work: state.changetest.work,
    head: state.changetest.head,
    type: state.getnews.type,
    status: state.getnews.status,
    response: state.getnews.response,
    errorcode: state.getnews.errorcode,
})

const mapDispatchToProps = dispatch => ({
    dispatchwork: () => {
        getNewsData(dispatch)
    },
    dispatchhead: () => dispatch(changehead('再见'))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)