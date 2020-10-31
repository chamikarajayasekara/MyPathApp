import React, {Component} from 'react';
import {Card} from "antd";
import UserDetails from "../../Login/profile/UserDetails/UserDetails";
import {Link} from "react-router-dom";
import PieChartOutlined from "@ant-design/icons/lib/icons/PieChartOutlined";
import FormOutlined from "@ant-design/icons/lib/icons/FormOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";

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
                                    <PieChartOutlined style={{fontSize: '16px'}}/>&nbsp;
                                    Dashboard</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/userList" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <FormOutlined style={{fontSize: '16px'}} />&nbsp;User List</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/ListOfCourses" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <EditOutlined  style={{fontSize: '16px'}}/>&nbsp;&nbsp;Course Details</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/adminDetails" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <UserOutlined />&nbsp;&nbsp;Admin Details</li>
                            </div>
                        </div>
                    </Link>
                    <Link to="/institutes" style={{textDecoration:"none"}}>
                        <div className="sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <HomeOutlined />&nbsp;&nbsp;Institutes</li>
                            </div>
                        </div>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default AdminSideBar;
