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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
            <Grid
                className={classes.root}
                container
                alignItems='center'
                direction='column'
                justify='center'>

                <GridList  className={classes.gridList}>
                        {response.map(data => (
                            <NewsListitem key={data.id} new={data}></NewsListitem>
                        ))}
                </GridList>

                {/* <ul>
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
                </ul> */}
                {
                    changestatus(status, classes)
                }
            </Grid>
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