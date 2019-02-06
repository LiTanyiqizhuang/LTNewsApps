import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsListitem from './newlistitem';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    REQUESTING,
    REQUEST_SUCCESS,
    REQUEST_ERROR
} from '../actionTypes'
import { red } from '@material-ui/core/colors';

const styles = {
    loading: {
        color: '#ffffff',
    },
    error: {
        color: '#b52e24',
    },
};


function changestatus(status, clasess) {
    switch (status){
        case REQUESTING:
            return(
                <div className={clasess.loading}>加载中</div>
            )
        case REQUEST_ERROR:
            return(
                <div className={clasess.error}>加载失败</div>
            )
    }
}  

class HomeComponent extends Component {

    componentWillMount(){
        const {dispatchwork} = this.props
        dispatchwork()
    }

    render() {
        const {response, classes, status} = this.props
        return (
            <div >
                <ul >
                {
                    !response?
                    "NEWS_LOAGIND" :
                        response.map(data => {
                            return(
                            <li key={data.id}>
                                <NewsListitem new={data}></NewsListitem>
                            </li>
                            )
                        })
                        
                }
                </ul>
                {
                    changestatus(status, classes)
                }
            </div>
        );
    }

}

HomeComponent.propTypes = {
    dispatchwork: PropTypes.func.isRequired,
    dispatchhead: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    errorcode: PropTypes.number.isRequired,
    response: PropTypes.array.isRequired
}

export default withStyles(styles)(HomeComponent);