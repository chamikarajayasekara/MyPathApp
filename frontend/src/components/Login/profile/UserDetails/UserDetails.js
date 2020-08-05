import React from 'react';
import axios from 'axios';
import './UserDetails.css';

export default class PersonList extends React.Component {
    state = {
        name:''
    }

    componentDidMount() {
        const username =  localStorage.getItem('userName');

        this.setState({
            name:username
        })
    }

    render() {
        return (
            <ul>
                <p>Welcome&nbsp;{this.state.name}</p>

                {/*{this.state.persons.email}*/}
            </ul>
        )
    }
}
