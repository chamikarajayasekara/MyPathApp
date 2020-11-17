import React, {Component} from 'react';
import axios from "axios";
import {BackTop, Input, notification} from "antd";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UserlistNav from "./UserlistNav";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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

        axios.post('http://localhost:5000/api/auth/register', user,{ headers: {"auth-token": token} })
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
                        {/*<h4 className="admin-login-h2">Add User</h4>*/}
                    </div>
                </div>
                <div className="row mt-3 mb-2">
                    <div className="col-md-1"></div>
                    <div className="col-md-8 bg-light border border-info">
                        <h4 className="admin-login-h2"><PersonAddIcon/>&nbsp;Create new user</h4>
                        <form onSubmit={this.Submit} className="login-form ">
                            <TextField id="outlined-basic" label="Name" variant="outlined" className="input-bar my-2" type="text" name="name" onChange={this.handleChange} required  />
                            <br/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" className="input-bar  my-2 " type="text" name="email" onChange={this.handleChange}  required />
                            <br/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" className="input-bar  my-2 " type="text" name="password" onChange={this.handleChange}  required />
                            <br/>
                            <TextField id="outlined-basic" label="Institute" variant="outlined" className="input-bar  my-2" type="text" name="institute" onChange={this.handleChange} required  />
                            <br/>
                            <TextField id="outlined-basic" label="Location" variant="outlined" className="input-bar  my-2" type="text" name="location" onChange={this.handleChange}  required />
                            <br/>
                            {/*<button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add User</button>*/}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{backgroundColor:"#01579b"}}
                                className="float-right text-white mt-2 mb-3"
                                endIcon={<CheckCircleIcon/>}>
                                Add User
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default AddUsers;
