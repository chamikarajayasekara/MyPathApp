import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import InstituteNav from "../InstituteList/InstituteNav";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import UserlistNav from "./UserlistNav";

class AddUsers extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        institute:'',
        location:''

    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    Submit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const token =  localStorage.getItem('admin-token');
        const {name,email,password,institute,location} = this.state;
        const user = {
            name:name,
            email:email,
            password:password,
            institute:institute,
            location:location,
        };

        axios.post(`http://localhost:5000/api/auth/register`, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Add User',
                    description: "Thank you! You're successfully added data!",
                });
            })
            .catch(error => {
                console.log(error)
                notification.error({
                    message: 'User Add Failed',
                    description: 'User exist on our system!'
                });
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <UserlistNav/>
                        <h1 className="admin-login-h2">Add User</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={this.Submit} className="login-form">
                            <Input  className="form-inputs" type="text" name="name" onChange={this.handleChange} size="large" placeholder="name" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="email" onChange={this.handleChange} size="large" placeholder="email" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="password" onChange={this.handleChange} size="large" placeholder="password" prefix={<KeyOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="institute" onChange={this.handleChange} size="large" placeholder="institute" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="location" onChange={this.handleChange} size="large" placeholder="location" prefix={<MailOutlined />} required />
                            <br/>
                            <button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add User</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default AddUsers;
