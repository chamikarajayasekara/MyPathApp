import React, {Component} from 'react';
import axios from "axios";

class Bio extends Component {
    state={
        bio:[],
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/subject/bio')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    bio:res.data
                })
            })
    }
    render() {
        const {bio} = this.state.bio;
        return (
            <div>
                {
                    this.state.bio.map(m =>
                        <li>
                            {m.name}
                        </li>)
                }
            </div>
        );
    }
}

export default Bio;
