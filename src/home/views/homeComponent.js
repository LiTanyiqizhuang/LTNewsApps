import React, { Component } from 'react';
import PropTypes from 'prop-types'

class HomeComponent extends Component {

    render() {
        const {work,head,dispatchwork,dispatchhead} = this.props
        return (
            <div >
                {
                    !work && !head ? 
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