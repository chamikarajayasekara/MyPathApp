import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import BankOutlined from "@ant-design/icons/lib/icons/BankOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import InstituteNav from "./InstituteNav";

class AddInstitute extends Component {
    state={
        id:'',
        name:'',
        location:'',
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const token =  localStorage.getItem('admin-token');
        const {name,location} = this.state;
        const user = {
            name:name,
            location:location,
        };

        axios.post(`http://localhost:5000/api/institute/register`, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Add Institute',
                    description: "Thank you! You're successfully added data!",
                });
            })
            .catch(error => {
                console.log(error)
                notification.error({
                    message: 'Institute Add Failed',
                    description: 'Institute exist on our system!'
                });
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <InstituteNav/>
                        <h1 className="admin-login-h2">Add Institute</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <Input  className="form-inputs" type="text" name="name" onChange={this.handleChange} size="large" placeholder="Institute name" prefix={<FileDoneOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="location" onChange={this.handleChange} size="large" placeholder="location" prefix={<BankOutlined />} required />
                            <br/>
                            <button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Institute</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default AddInstitute;
