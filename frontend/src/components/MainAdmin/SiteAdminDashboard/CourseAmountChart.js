import React, {Component} from 'react';
import axios from "axios";

class CourseAmountChart extends Component {
    state = {
        courses:'',
        courseList: [],
    }

    componentDidMount() {
        const token =  localStorage.getItem('admin-token');
        axios.get('http://localhost:5000/api/courses/details',{ headers: {"auth-token": token}})
            .then(res => {
                this.setState({
                    courses:res.data.length,
                    courseList:res.data,
                })
                console.log(res.data)
                console.log(res.data.length)
            })
    }

    render() {
        console.log(this.state.courseList.user_id)
        const institutes = this.state.courseList.map((course)=>(<p>{course.user_id}</p>))
        let count = 0;
        if (institutes === institutes){
            console.log("equal")
        }else {
            count++;
        }
        console.log(count)
        return (
            <div>
                
            </div>
        );
    }
}

export default CourseAmountChart;
