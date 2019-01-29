import React, { Component } from 'react';
import PropTypes from 'prop-types'

class HomeComponent extends Component {

    render() {
        const {work} = this.props
        const {head} = this.props
        const {dispatchwork} = this.props
        const {dispatchhead} = this.props
        return (
            <div >
                {
                    work === null ? 
                    "loading" : 
                    <div>
                        {work}
                        {head}
                    </div>
                } 
                <div onClick={dispatchwork}> 点我生成WORK </div>
                <div onClick={dispatchhead}> 点我生成HEAD </div>
            </div>
        );
    }

}

HomeComponent.propTypes = {
    work: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    dispatchwork: PropTypes.func.isRequired,
    dispatchhead: PropTypes.func.isRequired
}

export default HomeComponent;