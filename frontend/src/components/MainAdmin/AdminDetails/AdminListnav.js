import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminListnav extends Component {
    render() {
        return (
            <div className="row mt-lg-2">
                <div className="col-md-2"></div>
                <div className="col-md-3">
                    <Link to="/addAdmin" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs-add content text-light">Add Admin</li>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/adminTable" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs-add content text-light">Admin Table</li>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdminListnav;
