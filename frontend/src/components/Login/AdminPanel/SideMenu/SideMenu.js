import React, {Component} from 'react';
import { Card } from 'antd';
import UserDetails from "../../profile/UserDetails/UserDetails";
import './SideMenu.css'
import {Link} from "react-router-dom";
import PieChartOutlined from "@ant-design/icons/lib/icons/PieChartOutlined";
import FormOutlined from "@ant-design/icons/lib/icons/FormOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
class SideMenu extends Component {
    state = {
        mode: 'inline',
    };
    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    };
    render() {
        return (
            <div className="row">

                    <ul className="sidebar">

                        <Link to="/dashboard" style={{textDecoration:"none"}}>
                        <div className="row sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <PieChartOutlined style={{fontSize: '16px'}}/>&nbsp;
                                    Dashboard</li>
                            </div>
                        </div>
                        </Link>
                        <Link to="/CourseAdd" style={{textDecoration:"none"}}>
                        <div className="row sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <FormOutlined style={{fontSize: '16px'}} />&nbsp;Course Add</li>
                            </div>
                        </div>
                        </Link>
                        <Link to="/CourseList" style={{textDecoration:"none"}}>
                        <div className="row sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <EditOutlined  style={{fontSize: '16px'}}/>&nbsp;&nbsp;Course Details</li>
                            </div>
                        </div>
                        </Link>
                        <Link to="/PersonalDetails" style={{textDecoration:"none"}}>
                        <div className="row sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <UserOutlined />&nbsp;&nbsp;Your Details</li>
                            </div>
                        </div>
                        </Link>
                        <Link to="/dashboard" style={{textDecoration:"none"}}>
                        <div className="row sidebar-tabs">
                            <div className="col-lg-10 content">
                                <li className="nav-list">
                                    <LineChartOutlined />&nbsp;&nbsp;Statistics</li>
                            </div>
                        </div>
                        </Link>
                    </ul>
            </div>

        )
    }
}

export default SideMenu;
