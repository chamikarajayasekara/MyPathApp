import React, {Component,useEffect, useState} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import InstituteNav from "./InstituteNav";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import BankOutlined from "@ant-design/icons/lib/icons/BankOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";

function EditInstituteList (props) {
    const [institute,setInstitute] = useState({_id:'',name:'',location:''});
    const url = "http://localhost:5000/api/institute/details/"+props.match.params.id;
    console.log(url)

    useEffect(()=>{
        const token =  localStorage.getItem('admin-token');
        const GetInstitute = async () =>{
            const result = await axios.get('http://localhost:5000/api/institute/details/'+props.match.params.id,{ headers: {"auth-token": token}} )
            setInstitute(result.data);
            console.log(result)
        };
        GetInstitute();
    }, []);

    const UpdateInstitute = (e) => {
        e.preventDefault();
        const details = {
            name: institute.name,
            location : institute.location
        };
        const token =  localStorage.getItem('admin-token');
        axios.put('http://localhost:5000/api/institute/update/'+props.match.params.id, details,{ headers: {"auth-token": token}})
            .then((result)=>{
                props.history.push('/instituteTable');
                notification.success({
                    message: 'Institute List Edit',
                    description: "You're successfully edited data!",
                })
            })
    }

    const onChange = (e) => {
        e.persist();
        setInstitute({...institute,[e.target.name]: e.target.value})
    }


    return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <InstituteNav/>
                        <h1 className="admin-login-h2">Edit Institute</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={UpdateInstitute} className="login-form">
                            <Input  className="form-inputs" type="text" name="name" value={institute.name} onChange={onChange} size="large" placeholder="Institute name" prefix={<FileDoneOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="user" value={institute.location} onChange={onChange} size="large" placeholder="location" prefix={<BankOutlined />} required />
                            <br/>
                            <button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Edit Institute</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
}
export default EditInstituteList;
