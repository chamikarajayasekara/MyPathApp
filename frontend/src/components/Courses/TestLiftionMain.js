import React, {Component} from 'react';
import TestLift from "./TestLift";
import peaks from './peak';
import axios from "axios";

class TestLiftionMain extends Component {
    state={
        category:[]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/list')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    category:res.data
                })
            })
    }

    render() {
        return (
            <div>
                <TestLift characters={this.state.category}/>

            </div>
        );
    }
}

export default TestLiftionMain;
