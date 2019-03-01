import React, {
    Component
} from 'react';
import {
    withStyles
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {Router, Route, Link, NavLink} from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';
import Connect from '../../connect/views/connect'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    topbar: {
        background: '#060606',
        alph: '90%',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingLeft: 2 * 30,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
        },
    },
});


class TopBar extends Component {
    
    render(){
        const {classes, match} = this.props
        return(
            <div className={classes.root}>
                <AppBar className={classes.topbar} position="fixed">
                    <Toolbar>
                        <Grid 
                            container
                            className={classes.grow}
                            alignItems="baseline"
                            spacing={16}>
                            <Grid item>
                                <Typography 
                                    variant="h6" 
                                    color="inherit"  >
                                    LT News
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="p" 
                                    color="inherit"  >
                                    关于
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="p" 
                                    color="inherit"  >
                                    帮助
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="p" 
                                    color="inherit"  >
                                    <Link to="/connect">联系我们</Link>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                        
                        <Button color="inherit">
                        <NavLink to="/login">Login</NavLink>
                        </Button>
                    </Toolbar>
                    
                </AppBar>
            </div>
        )
    }

}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar)