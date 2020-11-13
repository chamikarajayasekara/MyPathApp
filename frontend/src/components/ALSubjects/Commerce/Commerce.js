import React, {Component} from 'react';
import axios from "axios";

class Commerce extends Component {
    state={
        commerce:[],
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/subject/com')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    commerce:res.data
                })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.commerce.map(m =>
                        <li>
                            {m.name}
                        </li>)
                }
            </div>
        );
    }
}

export default Commerce;
