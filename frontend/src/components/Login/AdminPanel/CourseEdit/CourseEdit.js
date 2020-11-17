import React, {Component} from 'react';
import axios from "axios";
import {Input, notification} from "antd";
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import KeyOutlined from "@ant-design/icons/lib/icons/KeyOutlined";
import TextField from "@material-ui/core/TextField";
import {MDBContainer} from "mdbreact";
import {Stepper} from "react-form-stepper";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import BackspaceIcon from "@material-ui/icons/Backspace";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CategoryIcon from "@material-ui/icons/Category";
import SortIcon from "@material-ui/icons/Sort";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MoneyIcon from "@material-ui/icons/Money";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import DetailsIcon from "@material-ui/icons/Details";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import MoreIcon from "@material-ui/icons/More";
import WorkIcon from "@material-ui/icons/Work";


const { TextArea } = Input;

class CourseEdit extends Component {

    state ={
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
        formActivePanel1: 1,
        formActivePanel1Changed: false,
        activeStep:0,
    }
    componentDidMount() {
        const token =  localStorage.getItem('cool-jwt');
        const url = "http://localhost:5000/api/courses/details/"+this.props.match.params.id;
        console.log(url)
        axios.get(url,{ headers: {"auth-token": token} })
            .then(res=>{
                console.log(res.data)
                console.log(res.data.name)
                const name = res.data.name;
                const institute = res.data.institute;
                const category = res.data.category;
                const level = res.data.level;
                const description = res.data.description;
                const duration = res.data.duration;
                const cost = res.data.cost;
                const payments = res.data.payments;
                const scholarships = res.data.scholarships;
                const qualifications = res.data.qualifications;
                const content = res.data.content;
                const enrollments = res.data.enrollments;
                const contacts = res.data.contacts;
                const further = res.data.further;
                const career = res.data.career;
                this.setState({name,institute,category,description,level,duration,cost,payments,scholarships,qualifications,content,enrollments,contacts,further,career})
            })
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
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const token =  localStorage.getItem('cool-jwt');
        const {name,institute,category,level,description,duration,cost,payments,scholarships,content,enrollments,contacts,further,career} = this.state;
        const user = {
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
        axios.put('http://localhost:5000/api/courses/update/'+this.props.match.params.id, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Edit Courses',
                    description: "Thank you! You're successfully added data!",
                });
                // window.location = '/CourseList';
            })
            .catch(error => {
                notification.error({
                    message: 'Course Edit Failed',
                    description: error+' '+'Please try again!'
                });
                console.log(error)
            });
    }
    render() {
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


        return (
            <div>
                <MDBContainer>
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="admin-login-h2 mt-2">Edit Courses</h5>
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
                                <Input  className="form-inputs" type="text" name="institute_name" value={this.state.institute} size="large" placeholder="institute_name" prefix={<AccountCircleIcon/>} required />
                                <br/>
                                <Input className="form-inputs mt-1 " type="text" name="name"  value={this.state.name} onChange={this.handleChange} size="large" placeholder="name" prefix={<SchoolIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="category"  value={this.state.category} onChange={this.handleChange} size="large" placeholder="category" prefix={<CategoryIcon />} required />
                                <br/>
                                <Input  className="form-inputs" type="text" name="level" value={this.state.level} onChange={this.handleChange} size="large" placeholder="level" prefix={<SortIcon />} required />
                                <br/>
                                {/*<Input  className="form-inputs" type="text" name="description" value={this.state.description} onChange={this.handleChange} size="large" placeholder="description" prefix={<UserAddOutlined />} required />*/}
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="description" value={this.state.description} onChange={this.handleChange} size="large" placeholder="description" prefix={"|Description about the course|"} required />

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
                                <Input className="form-inputs" type="text" name="duration" value={this.state.duration} onChange={this.handleChange} size="large" placeholder="duration" prefix={<ScheduleIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="cost" value={this.state.cost} onChange={this.handleChange} size="large" placeholder="cost" prefix={<MoneyIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="payments" value={this.state.payments} onChange={this.handleChange} size="large" placeholder="payments" prefix={<CreditCardIcon/>} required />
                                <br/>
                                <Input  className="form-inputs" type="text" name="scholarships" value={this.state.scholarships} onChange={this.handleChange} size="large" placeholder="scholarships" prefix={<MoneyOffIcon/>} required />
                                <br/>
                                {/*<Input  className="form-inputs" type="text" name="content" value={this.state.content} onChange={this.handleChange} size="large" placeholder="content" prefix={<DetailsIcon/>} required />*/}
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="content" value={this.state.content} onChange={this.handleChange} size="large" placeholder="content" prefix={<DetailsIcon/>} required />

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
                                <Input  className="form-inputs" type="text" name="enrollments" value={this.state.enrollments} onChange={this.handleChange} size="large" placeholder="enrollments" prefix={<AddToQueueIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="contacts" value={this.state.contacts} onChange={this.handleChange} size="large" placeholder="contacts" prefix={<AddIcCallIcon/>} required />
                                <br/>
                                <Input className="form-inputs" type="text" name="further" value={this.state.further} onChange={this.handleChange} size="large" placeholder="further" prefix={<MoreIcon/>} />
                                <br/>
                                {/*<Input className="form-inputs"  type="text" name="career" value={this.state.career} onChange={this.handleChange} size="large" placeholder="career" prefix={<WorkIcon/>}  />*/}
                                <TextArea rows={6}  allowClear className="form-inputs" type="text" name="career" value={this.state.career} onChange={this.handleChange} size="large" placeholder="career" prefix={<WorkIcon/>}  />
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
                                    endIcon={<EditAttributesIcon/>}>

                                    Edit Course
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

export default CourseEdit;
