import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import UserlistNav from "../../../MainAdmin/SiteAdminUsersList/UserlistNav";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import CourseListnav from "../CourseList/CourseListnav";

class CourseAdd extends Component {
    state={
        user_id:'',
        name:'',
        institute:'',
        category:'',
        level:'',
        description:'',
        duration:'',
        cost:'',
        payments:'',
        scholarships:'',
        qualifications:'',
        content:'',
        enrollments:'',
        contacts:'',
        further:'',
        career:'',
    }
    async componentDidMount() {
        const token =  localStorage.getItem('cool-jwt');
        const username = localStorage.getItem('userName');
        const user ={
            name:username,
        }
        axios.post('http://localhost:5000/api/auth/name',user,{ headers: {"auth-token": token} })
            .then(res=>{
                const institutes = res.data;
                console.log(res);
                const institute = (res.data[0].institute);
                // const user_id = localStorage.getItem('user_id');
                this.setState({ institute});
                // console.log(user_id);
            }).catch(e=>{
                console.log(e)
           });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const token =  localStorage.getItem('cool-jwt');
        const {user_id,name,institute,category,level,description,duration,cost,payments,scholarships,content,enrollments,contacts,further,career} = this.state;
        const user = {
            user_id:user_id,
            institute:institute,
            name:name,
            category:category,
            level:level,
            description:description,
            duration:duration,
            cost:cost,
            payments:payments,
            scholarships:scholarships,
            content:content,
            enrollments:enrollments,
            contacts:contacts,
            further:further,
            career:career
        };
        console.log(user)
        axios.post(`http://localhost:5000/api/courses/register`, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Add Courses',
                    description: "Thank you! You're successfully added data!",
                });
            })
            .catch(error => {
                notification.error({
                    message: 'Course Add Failed',
                    description: error+' '+'Please try again!'
                });
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <CourseListnav/>
                        <h1 className="admin-login-h2">Add Courses</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            {/*<Input  className="form-inputs d-none" type="text" name="user_id" value={this.state.user_id} size="large" placeholder="user_id" prefix={<UserAddOutlined />} required />*/}
                            {/*<br/>*/}
                            <Input  className="form-inputs" type="text" name="institute_name" value={this.state.institute} size="large" placeholder="institute_name" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="name" onChange={this.handleChange} size="large" placeholder="name" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="category" onChange={this.handleChange} size="large" placeholder="category" prefix={<KeyOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="level" onChange={this.handleChange} size="large" placeholder="level" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="description" onChange={this.handleChange} size="large" placeholder="description" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="duration" onChange={this.handleChange} size="large" placeholder="duration" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="cost" onChange={this.handleChange} size="large" placeholder="cost" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="payments" onChange={this.handleChange} size="large" placeholder="payments" prefix={<KeyOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="scholarships" onChange={this.handleChange} size="large" placeholder="scholarships" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="content" onChange={this.handleChange} size="large" placeholder="content" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input  className="form-inputs" type="text" name="enrollments" onChange={this.handleChange} size="large" placeholder="enrollments" prefix={<UserAddOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="contacts" onChange={this.handleChange} size="large" placeholder="contacts" prefix={<MailOutlined />} required />
                            <br/>
                            <Input className="form-inputs" type="text" name="further" onChange={this.handleChange} size="large" placeholder="further" prefix={<MailOutlined />}  />
                            <br/>
                            <Input className="form-inputs" type="text" name="career" onChange={this.handleChange} size="large" placeholder="career" prefix={<KeyOutlined />}  />
                            <br/>
                            <button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Course</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default CourseAdd;
