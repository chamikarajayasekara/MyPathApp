import React, {Component} from 'react';
import {getJwt} from "../../jwt/jwt";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Profile from "../profile/Profile";
import SiteAdminLandPage from "../../MainAdmin/SiteAdminLandPage/SiteAdminLandPage";

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            admin:undefined,
        };
    }

    componentDidMount() {
        this.getUser();
        this.getAdmin();
    }

    getUser() {
        const jwt = getJwt();
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        }



        axios.get('http://localhost:5000/api/auth', { headers: { Authorization: getJwt() } })
            .then(res => {
                console.log(res.data)
            this.setState({
                user: res.data
            })
        });
    }
    getAdmin() {
        const adminjwt = localStorage.getItem('admin-token');
        if (!adminjwt) {
            this.setState({
                admin: null
            });
            return;
        }

        axios.get('http://localhost:5000/api/admin', { headers: {"admin-token": adminjwt} })
            .then(res => {
                console.log(res.data)
                this.setState({
                    admin: res.data
                })
            });
    }
    render() {
        const { user } = this.state;
        const {admin} = this.state;
        if (user === undefined) {
            return (
                <div>
                    <Profile/>
                </div>
            );
        }
        if (admin === undefined){
            return (
                <div>
                    <SiteAdminLandPage/>
                </div>
            );
        }
        if (user === null) {
            this.props.history.push('/login');
        }
        if (admin === null){
            this.props.history.push('/admin');
        }
        return this.props.children;
    }
}

export default withRouter(AuthComponent);
