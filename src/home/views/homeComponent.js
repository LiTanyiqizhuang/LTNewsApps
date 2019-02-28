import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom'
import NewsListitem from './newlistitem';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    REQUESTING,
    REQUEST_ERROR
} from '../actionTypes'
import Grid from '@material-ui/core/Grid';
import Topbar from './topbar'
import Connect from '../../connect/views/connect'

const styles = {
    loading: {
        color: '#ffffff',
    },
    error: {
        color: '#b52e24',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: '100px',
    },
    gridList: {

    },
    first: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: '#060606'
    }
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
            <div className={classes.first}>
                <Topbar  className={classes.topbar}></Topbar>
                <Grid
                    className={classes.root}
                    container>
                    <Grid
                        xs={8}
                        container
                        justify='center'
                        direction='row-reverse'
                    >
                        {response.map(data => (
                            <Grid item className={classes.gridList} key={data.id}>
                                <NewsListitem new={data}></NewsListitem>
                            </Grid> 
                        ))}
                    </Grid>
                    {
                        changestatus(status, classes)
                    }
                </Grid>
                
                <div>
                    <Route path="/connect" Component={Connect}></Route>
                </div>
                
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