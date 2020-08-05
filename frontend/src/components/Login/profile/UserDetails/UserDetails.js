import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons:'',
        email:'',
        name:''
    }

    componentDidMount() {
        const token =  localStorage.getItem('cool-jwt');
        axios.get(`http://localhost:5000/api/auth`,{ headers: {"auth-token": token} })
            .then(res => {
                const persons = res.data;
                console.log(persons)
                const email = res.data.email;
                console.log(email)
                const name = res.data.name;
                this.setState({persons})
                // this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                <p>Welcome&nbsp;{this.state.persons.name}</p>

                {/*{this.state.persons.email}*/}
            </ul>
        )
    }
}
