import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import LoginOutlined from "@ant-design/icons/lib/icons/LoginOutlined";
import '../../Login/LoginForm/Log';
import './SiteAdminLogin.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
                    <div className="col-md-12 mt-3">
                        <div>
                            <img src="/images/logo.jpg" alt="" className="form-logo"/>
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 border border-info p-4">
                    <h4 className="admin-login-h2"><LoginOutlined/>&nbsp;Admin Sign In</h4>
                    <form onSubmit={this.handleSubmit}>

                        <TextField id="outlined-basic" label="Email" variant="outlined" className="input-bar my-2" type="text" name="email" onChange={this.handleChange} size="large" placeholder="email" required  />
                        <br/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" className="input-bar  my-2 " type="password" name="password" onChange={this.handleChange} size="large" placeholder="password" required />
                        <br/>
                        <Button
                            variant="contained"
                            type="submit"
                            style={{backgroundColor:"#01579b"}}
                            className="float-right text-white mt-2 mb-3"
                            endIcon={<LoginOutlined/>}>
                            Admin Sign in
                        </Button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
        );
    }
}

export default SiteAdminLogging;
