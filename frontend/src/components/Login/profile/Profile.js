
import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from "../jwt/jwt";
import PersonList from "./test";

class Profile extends Component {
    constructor() {
        super();
    }
    logout = () =>{
        const token =  localStorage.getItem('cool-jwt');
        axios.get(`http://localhost:5000/api/auth/logout`,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res.data);
                localStorage.clear("userName");
                localStorage.clear("tokenNumber");
                window.location.replace("/login");
            })
    }
        render() {
                return (
                    <div>
                        <button type="submit" onClick={this.logout}>LogOut</button>
                        <PersonList/>
                    </div>
                );
            }
    }

export default Profile;
