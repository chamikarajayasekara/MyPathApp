import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import InstituteNav from "../InstituteList/InstituteNav";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import BankOutlined from "@ant-design/icons/lib/icons/BankOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function EditUsersList (props) {
    const [user,setUser] = useState({_id:'',name:'',email:''});
    const url = "http://localhost:5000/api/auth/details/"+props.match.params.id;
    console.log(url)

    useEffect(()=>{
        const token =  localStorage.getItem('admin-token');
        const GetUser = async () =>{
            const result = await axios.get('http://localhost:5000/api/auth/details/'+props.match.params.id,{ headers: {"auth-token": token}} )
            setUser(result.data);
            console.log(result)
        };
        GetUser();
    }, []);

    const UpdateInstitute = (e) => {
        e.preventDefault();
        const details = {
            name: user.name,
            email : user.email,
            institute: user.institute,
            location:user.location
        };
        const token =  localStorage.getItem('admin-token');
        axios.put('http://localhost:5000/api/auth/update/'+props.match.params.id, details,{ headers: {"auth-token": token}})
            .then((result)=>{
                props.history.push('/usersTable');
                notification.success({
                    message: 'Institute List Edit',
                    description: "You're successfully edited data!",
                })
            })
    }

    const onChange = (e) => {
        e.persist();
        setUser({...user,[e.target.name]: e.target.value})
    }

    console.log(props)

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <InstituteNav/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 bg-light mt-2">
                        <h4 className="admin-login-h2"><EditIcon/><PersonIcon/>&nbsp;Edit user</h4>
                        <form onSubmit={UpdateInstitute} className="login-form ">
                            {/*<Input  className="form-inputs" type="text" name="name" value={user.name} onChange={onChange} size="large" placeholder="name" prefix={<FileDoneOutlined />} required />*/}
                            {/*<br/>*/}
                            {/*<Input className="form-inputs" type="text" name="user" value={user.email} onChange={onChange} size="large" placeholder="email" prefix={<BankOutlined />} required />*/}
                            {/*<br/>*/}
                            {/*<Input  className="form-inputs" type="text" name="institute" value={user.institute} onChange={onChange} size="large" placeholder="Institute name" prefix={<FileDoneOutlined />} required />*/}
                            {/*<br/>*/}
                            {/*<Input className="form-inputs" type="text" name="location" value={user.location} onChange={onChange} size="large" placeholder="location" prefix={<BankOutlined />} required />*/}
                            {/*<br/>*/}

                            <TextField id="outlined-basic"  variant="outlined" className="input-bar mb-2 " type="text" name="name" value={user.name} onChange={onChange}  required  />
                            <br/>
                            <TextField id="outlined-basic"  variant="outlined" className="input-bar mb-2  "  type="text" name="user" value={user.email} onChange={onChange}  required  />
                            <br/>
                            <TextField id="outlined-basic"  variant="outlined" className="input-bar mb-2 "  type="text" name="institute" value={user.institute} onChange={onChange}  required  />
                            <br/>
                            <TextField id="outlined-basic"  variant="outlined" className="input-bar mb-2" type="text"  name="location" value={user.location} onChange={onChange}  required  />
                            <br/>
                            {/*<button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Edit User</button>*/}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{backgroundColor:"#01579b"}}
                                className="float-right text-white mt-2 mb-3"
                                endIcon={<CheckCircleIcon/>}>
                                Edit User
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
}

export default EditUsersList;
