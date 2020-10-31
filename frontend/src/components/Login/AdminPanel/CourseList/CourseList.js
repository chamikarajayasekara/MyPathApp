import React, {Component} from 'react';
import axios from "axios";
import { Card, Col, Row } from 'antd';
import {Link} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Button} from "@material-ui/core";
import CourseListtable from "./CourseListtable";
class CourseList extends Component {
    state={
        courseList:[],
        institute:''
    }
    componentDidMount() {
        const token =  localStorage.getItem('cool-jwt');
        const user_id = localStorage.getItem('user_id');
        const user ={
            user_id:user_id,
        }
        axios.post('http://localhost:5000/api/courses',user,{ headers: {"auth-token": token} })
            .then(res=>{
                console.log(res.data);
                const courseList = res.data;
                this.setState({ courseList});
                const institute = res.data[0].institute;
                this.setState({institute})
                console.log(res.data[0]._id)
            })
    }


    render() {
        let size =this.state.courseList.length;
        return (
            <div>
                <div>
                    <h5 className="admin-login-h2">Courses in {this.state.institute}</h5>
                    <h5 className="admin-login-h2">{size}&nbsp;Courses found</h5>
                </div>
            <div className="row container ">
                {/*{this.state.courseList.map(course=>*/}
                {/*<Card className="col-md-4 card d-flex flex-row flex-wrap bd-highlight mb-3 mt-3 ">*/}

                {/*        <div className="" key={course._id}>*/}
                {/*            <p>{course.name}</p><hr/>*/}
                {/*            <span>{course.category}</span>&nbsp;*/}
                {/*            <span>{course.level}</span>*/}
                {/*        </div>*/}
                {/*    <Link to={"/CourseDetails/"+course._id}><span>More info</span></Link>*/}
                {/*</Card>)}*/}
            </div>
               <CourseListtable/>
            </div>
        );
    }
}

export default CourseList;
