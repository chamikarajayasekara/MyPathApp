import React, {Component} from 'react';
import UserDetails from "../profile/UserDetails";

class AdminNav extends Component {
    render() {
        return (
            <div className="row bg-light p-2">
                <div className="col-md-3">
                    <h5>MyPath Admin</h5>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-3">
                    <UserDetails/>
                </div>

            </div>
        );
    }
}

export default AdminNav;
