import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

class InstituteNav extends Component {
    render() {
        return (
            <div className="row mt-lg-2">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <Link to="/addInstitute" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs content text-light">Add Institute</li>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/instituteTable" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs content text-light">Institute Table</li>
                    </Link>
                </div>
            </div>
        );
    }
}

export default InstituteNav;
