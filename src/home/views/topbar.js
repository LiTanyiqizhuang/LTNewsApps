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
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
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
    }
};
  

class TopBar extends Component {
    
    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <AppBar className={classes.topbar} position="fixed">
                    <Toolbar>
                        <Typography 
                        variant="h6" 
                        color="inherit"  
                        className={classes.grow}>
                        News
                        </Typography>
                        <Button color="inherit">Login</Button>
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