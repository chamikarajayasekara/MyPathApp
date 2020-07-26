import React, {Component} from 'react';
import {getJwt} from "../../jwt/jwt";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Profile from "../Profile";

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        const jwt = getJwt();
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        }

        axios.get('http://localhost:5000/api/users',
            { headers: { Authorization: getJwt() } })
            .then(res => {
                console.log(getJwt())
            this.setState({
                user: res.data
            })
        });
    }

    render() {
        const { user } = this.state;
        if (user === undefined) {
            return (
                <div>
                    <Profile/>
                </div>
            );
        }

        if (user === null) {
            this.props.history.push('/login');
        }

        return this.props.children;
    }
}

export default withRouter(AuthComponent);
