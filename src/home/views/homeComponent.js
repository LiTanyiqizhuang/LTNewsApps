import React, { Component } from 'react';

class HomeComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {test} = this.props

        return (
            
            <div >
            {
                test === null ? 
                "loading" : 
                <div>
                    {test.work}
                    {test.head}
                </div>
            } 
            </div>
        );
    }

}

export default HomeComponent;