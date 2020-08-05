import React, {Component} from 'react';
import AdminListnav from "./AdminListnav";
import axios from "axios";
import {Input, notification} from "antd";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";

class AddAdmin extends Component {
    state ={
        name:'',
        email:'',
        password:''
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const token =  localStorage.getItem('admin-token');
        const {name,email,password} = this.state;
        const user = {
            name:name,
            email:email,
            password:password
        };

        axios.post(`http://localhost:5000/api/admin/Adminreg`, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Add Admin',
                    description: "Thank you! You're successfully added data!",
                });
            })
            .catch(error => {
                console.log(error)
                notification.error({
                    message: 'Admin Add Failed',
                    description: 'Institute exist on our system!'
                });
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <AdminListnav/>
                        <h1 className="admin-login-h2">Add Admin</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <Input  className="form-inputs" type="text" name="name" onChange={this.handleChange} size="large" placeholder="name" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="email" onChange={this.handleChange} size="large" placeholder="email" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="password" onChange={this.handleChange} size="large" placeholder="password" prefix={<KeyOutlined />} required />
                            <br/>
                            <button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Admin</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default AddAdmin;
