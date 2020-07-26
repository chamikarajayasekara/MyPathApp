
import React, {Component} from 'react';
import axios from 'axios';
import Login from "./Login";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        localStorage.clear("userName");
        localStorage.clear("tokenNumber");
        window.location.replace("/login")
    }


    render() {
        async function logoutFunction() {
            // fetch data from a url endpoint
            const data = await axios.get("http://localhost:5000/api/users/auth");
            console.log(data)
            return data;
        }
        const username = localStorage.getItem("userName")
        console.log(username)
        return (
            <div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        Welcome &nbsp;{username} to the administration panel
                    </div>
                </div>
                <button type="submit" onClick={this.logout}>LogOut</button>
                <button type="submit" onClick={logoutFunction}>LogOut</button>
            </div>
        );
    }
}

export default Profile;
