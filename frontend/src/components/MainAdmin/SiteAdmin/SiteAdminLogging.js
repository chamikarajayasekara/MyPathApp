import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import LoginOutlined from "@ant-design/icons/lib/icons/LoginOutlined";
import '../../Login/LoginForm/Log';
import './SiteAdminLogin.css';

class SiteAdminLogging extends Component {
    state = {
        email: '',
        password: '',
        CurrentUser:[]
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const {email,password} = this.state;
        const admin = {
            email:email,
            password:password,
        };

        axios.post(`http://localhost:5000/api/admin/Adminlogin`, admin)
            .then(res => {
                console.log(res);
                console.log(res.data)
                const tokenNumber = res.data.token;
                const userName = res.data.name;
                const loginSuccess =  res.data.success;
                console.log(loginSuccess)
                localStorage.setItem('admin-token', res.data.token);
                if (loginSuccess === true) window.location.replace("/adminDashboard")

            })
            .catch(error => {
                notification.error({
                    message: 'Login Failed',
                    description: 'Wrong user name or password Please try again!'
                });
            });
    }
    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1 className="admin-login-h2">Admin Login</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <img src="/images/logo.jpg" alt="" className="form-logo"/>
                        </div>
                        <Input  className="form-inputs" type="text" name="email" onChange={this.handleChange} size="large" placeholder="email" prefix={<UserOutlined />} required />
                        <br/>
                        <Input className="form-inputs" type="password" name="password" onChange={this.handleChange} size="large" placeholder="password" prefix={<KeyOutlined />} required />
                        <br/>
                        {/*<button className="btn" id="loginBtn" type="submit">*/}
                        {/*    <LoginOutlined/>&nbsp;Login*/}
                        {/*</button>*/}
                        <button className="login" type="submit"><LoginOutlined/>&nbsp;Login</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
        );
    }
}

export default SiteAdminLogging;
