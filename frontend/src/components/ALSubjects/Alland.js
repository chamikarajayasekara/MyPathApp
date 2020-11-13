import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SiteAdminDashboard from "../MainAdmin/SiteAdminDashboard/SiteAdminDashboard";
import SiteAdminUsersList from "../MainAdmin/SiteAdminUsersList/SiteAdminUsersList";
import Arts from "./Arts/Arts";
import AlStream from "./ALStream";
import Commerce from "./Commerce/Commerce";
import Test from "./Test";

class Alland extends Component {
    render() {
        return (
            <div className="container-fluid">
              <Test/>
            </div>
        );
    }
}

export default Alland;
