import React, {Component} from 'react';
import axios from "axios";

class CourseDet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result:'',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/list/'+this.props.match.params.id)
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    result:res.data
                })
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.result.institute}</p>
                <p>{this.state.result.name}</p>
                <p>{this.state.result.category}</p>
                <p>{this.state.result.level}</p>
                <p>{this.state.result.content}</p>
                <p>{this.state.result.description}</p>
                <p>{this.state.result.duration}</p>
                <p>{this.state.result.cost}</p>
                <p>{this.state.result.payments}</p>
                <p>{this.state.result.contacts}</p>
            </div>
        );
    }
}

export default CourseDet;
