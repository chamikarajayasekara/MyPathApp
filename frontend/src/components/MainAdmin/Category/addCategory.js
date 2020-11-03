import React, {Component} from 'react';
import axios from "axios";
import {notification} from "antd";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Categorytable from "./Categorytable";

class AddCategory extends Component {
    state={
        name:'',
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const token =  localStorage.getItem('admin-token');
        const {name} = this.state;
        const user = {
            name:name,
        };

        axios.post(`http://localhost:5000/api/category/register`, user,{ headers: {"auth-token": token} })
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
                    <div className="col-md-2"></div>
                    <div className="col-md-6 bg-light p-3 mt-3 border border-info">
                        <h4 className="admin-login-h2"><SupervisorAccountIcon/>&nbsp;Create new category</h4>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <TextField id="outlined-basic" label="Name" variant="outlined" className="input-bar my-2" type="text" name="name" onChange={this.handleChange} required  />
                            <br/>
                            {/*<button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Admin</button>*/}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{backgroundColor:"#01579b"}}
                                className="float-right text-white mt-2 mb-3"
                                endIcon={<AddCircleOutlineIcon/>}>
                                Add Category
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Categorytable/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCategory;
