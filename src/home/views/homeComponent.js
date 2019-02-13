import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
        margin: '100px auto auto auto',
    },
    gridList: {

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
            <div>
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
                            <NewsListitem   new={data}></NewsListitem>
                        </Grid> 
                    ))}
                </Grid>
                {
                    changestatus(status, classes)
                }
            </Grid>
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