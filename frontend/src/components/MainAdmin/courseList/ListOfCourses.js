import React, {Component} from 'react';
import axios from "axios";
import {Card} from "antd";
import CourseTable from "./CourseTable";
import { Table, Input, Button, Space } from 'antd';
import {Link} from "react-router-dom";


class ListOfCourses extends Component {
    state ={
        courses:[],
    }
    componentDidMount() {
        const token =  localStorage.getItem('admin-token');
        axios.get('http://localhost:5000/api/courses/details',{ headers: {"auth-token": token} })
            .then(res=>{
                console.log(res.data)
                const courses = res.data
                this.setState({courses})
                const c_id = localStorage.setItem('id',res.data._id)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        return (

            <div>
                {/*<div className="row  ">*/}
                {/*    {this.state.courses.map(course=>*/}
                {/*        <Card className="col-md-3 card d-flex flex-row flex-wrap bd-highlight mb-3 mt-3 ml-1 ">*/}

                {/*            <div className="" key={course._id}>*/}
                {/*                <p>{course.name}</p><hr/>*/}
                {/*                <span>{course.category}</span>&nbsp;*/}
                {/*                <span>{course.level}</span>*/}
                {/*            </div>*/}
                {/*            <Link to={"/DetailsOfCourse/"+course._id}><span>More info</span></Link>*/}
                {/*        </Card>*/}
                {/*    )}*/}
                {/*</div>*/}
              <CourseTable/>
            </div>
        );
    }
}

export default ListOfCourses;
