import HomeComponent from './homeComponent'
import { connect } from 'react-redux'
import {changework, changehead} from '../actions'

const mapStateToProps = state => ({
    work: state.changetest.work,
    head: state.changetest.head
})

const mapDispatchToProps = dispatch => ({
    dispatchwork: () => dispatch(changework('您好')),
    dispatchhead: () => dispatch(changehead('再见'))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)