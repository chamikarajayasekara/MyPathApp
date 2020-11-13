import React, {Component} from 'react';
import axios from "axios";

class Arts extends Component {
    state={
        art:[],
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/subject/arts')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    art:res.data
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.art.map(m =>
                        <li>
                            {m.name}
                        </li>)
                }
            </div>
        );
    }
}

export default Arts;
