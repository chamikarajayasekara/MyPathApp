import React, {Component} from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Input, notification} from "antd";
import SendIcon from '@material-ui/icons/Send';
import BackspaceIcon from '@material-ui/icons/Backspace';
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Stepper } from 'react-form-stepper';
import VerticalAlignTopOutlined from "@ant-design/icons/lib/icons/VerticalAlignTopOutlined";
import TextArea from "antd/es/input/TextArea";
import SchoolIcon from '@material-ui/icons/School';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import SortIcon from '@material-ui/icons/Sort';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MoneyIcon from '@material-ui/icons/Money';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DetailsIcon from '@material-ui/icons/Details';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MoreIcon from '@material-ui/icons/More';
import WorkIcon from '@material-ui/icons/Work';

class StepForm extends Component {
    state={
        formActivePanel1: 1,
        formActivePanel1Changed: false,
        current: 0,
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
        black:true,
        activeStep:0,
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
    swapFormActive = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true,
        });
        let newCount = this.state.activeStep + 1;
        this.setState({
            activeStep: newCount,
        })

    }
    handleNextPrevClick = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true,
        });

        let newCount = this.state.activeStep + 1;
        this.setState({
            activeStep: newCount,
        })

    }
    calculateAutofocus = (a) => {
        if (this.state['formActivePanel' + a + 'Changed']) {
            return true
        }
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
        const { current } = this.state;
        let {activeStep} = this.state;
        let {color} = this.state;
        let c,d,e;
        if (activeStep === 0){
            c = '#757575';
            d = '#757575';
            e = '#757575';
        }else if (activeStep ===1){
            c = '#01579b';
            d = '#757575';
            e ='#757575';
        }else if (activeStep === 2){
            c = "#01579b";
            d = '#01579b';
            e ='#757575';
        }else if (activeStep === 3){
            c = "#01579b";
            d = "#01579b";
            e= "#01579b"
        }
        else{
            c = "#01579b";
            d = "#01579b";
            e= "#01579b"
        }
        console.log(color)
        console.log(activeStep)
        return (
            <div>
                <MDBContainer>
                    <div className="row">
                        <div className="col-md-12">
                            <Stepper
                                steps={[
                                    <Chip
                                        label="1"
                                        clickable
                                        className="text-white"
                                        // style={{backgroundColor:this.state.color}}
                                        style={{backgroundColor:c}}
                                        onClick={
                                            this.swapFormActive(1)(1)
                                        }

                                    />,
                                    <Chip
                                        label="2"
                                        clickable
                                        className="text-white"
                                        // style={{backgroundColor:this.state.color}}
                                        style={{backgroundColor:d}}
                                        onClick={this.swapFormActive(1)(2)}
                                    />,
                                    <Chip
                                        label="3"
                                        clickable
                                        className="text-white "
                                        // style={{backgroundColor:this.state.color}}
                                        style={{backgroundColor:e}}
                                        onClick={this.swapFormActive(1)(3)}
                                    />]}
                                activeStep={this.state.activeStep}
                            />
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="row">
                            {this.state.formActivePanel1 === 1 &&
                            (<div className="col-md-12">

                                <Input  className="form-inputs" type="text" name="institute_name" value={this.state.institute} size="large" placeholder="Institute" prefix={<AccountCircleIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="name" onChange={this.handleChange} size="large" placeholder="Name" prefix={<SchoolIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="category" onChange={this.handleChange} size="large" placeholder="Category" prefix={<CategoryIcon />} required />
                                <br/>
                                <Input  className="form-inputs" type="text" name="level" onChange={this.handleChange} size="large" placeholder="Level" prefix={<SortIcon />} required />
                                <br/>
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="description" onChange={this.handleChange} size="large" placeholder="Description" required/>
                                <Button
                                    variant="contained"
                                    style={{backgroundColor:"#01579b"}}
                                    className="float-right text-white"
                                    onClick={this.handleNextPrevClick(1)(2)}
                                    endIcon={<SendIcon/>}>
                                    Next
                                </Button>
                            </div>)}

                            {this.state.formActivePanel1 === 2 &&
                            (<div className="col-md-12">
                                <Input className="form-inputs" type="text" name="duration" onChange={this.handleChange} size="large" placeholder="Duration" prefix={<ScheduleIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="cost" onChange={this.handleChange} size="large" placeholder="Cost" prefix={<MoneyIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="payments" onChange={this.handleChange} size="large" placeholder="Payments" prefix={<CreditCardIcon/>} required />
                                <br/>
                                <Input  className="form-inputs" type="text" name="scholarships" onChange={this.handleChange} size="large" placeholder="Scholarships" prefix={<MoneyOffIcon/>} required />
                                 <br/>
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="content" onChange={this.handleChange} size="large" placeholder="Content" prefix={<DetailsIcon/>} required />

                                <Button
                                    variant="contained"
                                    style={{backgroundColor:"#004940"}}
                                    className="float-left text-white"
                                    onClick={this.handleNextPrevClick(1)(1)}
                                    endIcon={<BackspaceIcon/>}>
                                    Previous
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{backgroundColor:"#01579b"}}
                                    className="float-right text-white"
                                    onClick={this.handleNextPrevClick(1)(3)}
                                    endIcon={<SendIcon/>}>
                                    Next
                                </Button>
                            </div>)}

                            {this.state.formActivePanel1 === 3 &&
                            (<div className="col-md-12">
                                <Input  className="form-inputs" type="text" name="enrollments" onChange={this.handleChange} size="large" placeholder="Enrollments" prefix={<AddToQueueIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="contacts" onChange={this.handleChange} size="large" placeholder="Contacts" prefix={<AddIcCallIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="further" onChange={this.handleChange} size="large" placeholder="Further" prefix={<MoreIcon/>}  />
                                <br/>
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="career" onChange={this.handleChange} size="large" placeholder="Career" prefix={<WorkIcon/>} required />

                                {/*<Input className="form-inputs" type="text" name="career" onChange={this.handleChange} size="large" placeholder="Career" prefix={<WorkIcon/>}  />*/}
                                <br/>
                                <Button
                                    variant="contained"
                                    style={{backgroundColor:"#004940"}}
                                    className="float-left text-white"
                                    onClick={this.handleNextPrevClick(1)(2)}
                                    endIcon={<BackspaceIcon/>}>
                                    Previous
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{backgroundColor:"#01579b"}}
                                    className="float-right text-white"
                                    onClick={this.handleNextPrevClick()()}
                                    endIcon={<CheckCircleIcon/>}>

                                    Add Course
                                </Button>
                                {/*<button className="login"  type="submit"><VerticalAlignTopOutlined />&nbsp;Add Course</button>*/}
                            </div>)}
                        </div>
                    </form>
                </MDBContainer>
            </div>
        );
    }
}

export default StepForm;
