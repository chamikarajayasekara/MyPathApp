import React, {Component} from 'react';
import Logout from "../logout/Logout";
import './AdminNav.css';
import UserDetails from "../../profile/UserDetails/UserDetails";


class AdminNav extends Component {
    render() {
        return (
            <div className="row  bg-light">
                <div className="col-md-4 mt-1 mb-1">
                    <UserDetails/>
                </div>
                <div className="col-md-8 mt-1 mb-1"> <Logout/> </div>
            </div>
        );
    }
}

export default AdminNav;
