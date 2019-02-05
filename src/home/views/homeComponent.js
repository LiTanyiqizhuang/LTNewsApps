import React, { Component } from 'react';
import PropTypes from 'prop-types'

class HomeComponent extends Component {

    render() {
        const {work,head,dispatchwork,dispatchhead,response} = this.props
        return (
            <div >
                <ul>
                {
                    !response?
                    "NEWS_LOAGIND" :
                        response.map(data => {
                            return(
                            <li>
                                {data.title}
                            </li>
                            )
                        })
                        
                }
                </ul>
                <div onClick={dispatchwork}> 点我获取列表</div>
                <div onClick={dispatchhead}>  </div>
            </div>
        );
    }

}

HomeComponent.propTypes = {
    work: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    dispatchwork: PropTypes.func.isRequired,
    dispatchhead: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    errorcode: PropTypes.number.isRequired,
    response: PropTypes.array.isRequired
}

export default HomeComponent;