import React, {Component} from 'react';
import {Card} from "antd";
import UserDetails from "../../Login/profile/UserDetails/UserDetails";
import {Link} from "react-router-dom";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import CategoryIcon from '@material-ui/icons/Category';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import QueueIcon from '@material-ui/icons/Queue';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

class AdminSideBar extends Component {
    render() {
        return (
            <div className="row">
                {/*<Card type="card-header" className="text-left user-details-bar" style={{ width: 500 }}>*/}
                {/*    <UserDetails/>*/}
                {/*</Card>*/}
                <ul className="sidebar">
                    <Link to="/adminDashboard" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <DashboardIcon style={{fontSize: '16px'}}/>&nbsp;
                                    Dashboard</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/addUsers" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <PersonAddIcon style={{fontSize: '16px'}} />&nbsp;Add User</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/usersTable" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <PeopleAltIcon style={{fontSize: '16px'}} />&nbsp;Users Table</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ListOfCourses" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <SchoolIcon   style={{fontSize: '16px'}}/>&nbsp;&nbsp;Course Details</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/AddCategory" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <CategoryIcon  style={{fontSize: '16px'}}/>&nbsp;&nbsp;Add category</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/addAdmin" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <QueueIcon/>&nbsp;&nbsp;Add Admin</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/adminTable" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <SupervisorAccountIcon  />&nbsp;&nbsp;Admin Details</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/institutes" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <AccountBalanceIcon/>&nbsp;&nbsp;Institutes</li>
                            </div>
                        </div>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default AdminSideBar;
