import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import UserlistNav from "../../../MainAdmin/SiteAdminUsersList/UserlistNav";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import CourseListnav from "../CourseList/CourseListnav";
import StepForm from "./stepForm";

class CourseAdd extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <CourseListnav/>
                        <h5 className="admin-login-h2">Add Courses</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <StepForm/>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    }
}

export default CourseAdd;
