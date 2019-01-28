import React, { Component } from 'react';
import HomeComponent from './homeComponent'


const json_test = {"work": "hello", "head" : "test"}

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            json: null,
        }
    }

    componentDidMount() {
        this.setState({
            json: json_test,
        })
    }

    render() {
        return (
          <HomeComponent className="Home" test={this.state.json}>
            首页内容
          </HomeComponent>
        );
    }
}
    
export default Home;