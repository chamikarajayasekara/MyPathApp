import React, {Component} from 'react';
import AdminListnav from "./AdminListnav";
import axios from "axios";
import {Input, notification} from "antd";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import TextField from "@material-ui/core/TextField";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";


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
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6 bg-light p-3 mt-3 border border-info">
                        <h4 className="admin-login-h2"><SupervisorAccountIcon/>&nbsp;Create new Admin</h4>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <TextField id="outlined-basic" label="Name" variant="outlined" className="input-bar my-2" type="text" name="name" onChange={this.handleChange} required  />
                            <br/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" className="input-bar  my-2 " type="text" name="email" onChange={this.handleChange}  required />
                            <br/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" className="input-bar  my-2 " type="text" name="password" onChange={this.handleChange}  required />
                            <br/>
                            {/*<button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Admin</button>*/}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{backgroundColor:"#01579b"}}
                                className="float-right text-white mt-2 mb-3"
                                endIcon={<VerticalAlignTopOutlined />}>
                                Sign Up
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default AddAdmin;
