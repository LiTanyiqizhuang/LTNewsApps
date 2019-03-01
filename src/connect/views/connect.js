import React from 'react'

import {
    withStyles
} from '@material-ui/core/styles';

const styles = {
    loading: {
        color: '#ffffff',
    },
};

class Connect extends React.Component {

    render() {
        const {match,classes} = this.props
        return(
            <div className={classes.loading}>
                访问我们的主页 https://github.com/LiTanyiqizhuang/LTNewsApps
                联系我们 QQ: 867872541 1012956221
                {match.params.id}
            </div>
        )
    }
}

export default withStyles(styles)(Connect);