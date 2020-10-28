import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddUsers from "./AddUsers";

class UserlistNav extends Component {
    render() {
        return (
            <div>
                <div className="row mt-lg-2" >
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <Link to="/addUsers" style={{textDecoration:"none"}}>
                            <li className="sidebar-tabs content text-light">Add Users</li>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/usersTable" style={{textDecoration:"none"}}>
                            <li className="sidebar-tabs content text-light">Users Table</li>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserlistNav;
