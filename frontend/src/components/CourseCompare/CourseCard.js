import React, {Component} from 'react';
import axios from "axios";
import {Card} from "antd";
import {Link} from "react-router-dom";

class CourseCard extends Component {
    state ={
        courses:[],
        search:'',
    }
    componentDidMount() {

        axios.get('http://localhost:5000/api/courses/list/')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    courses:res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div className="row container bg-primary ">
                    {this.state.courses.map(course=>
                        <Card className="col-md-4 card d-flex flex-row flex-wrap bd-highlight mb-3 mt-3 " onClick={this.handleSelect}>

                            <div className="" key={course._id}>
                                <p>{course.name}</p><hr/>
                                <span>{course.category}</span>&nbsp;
                                <span>{course.level}</span>
                            </div>
                            <Link to={"/courseDet/"+course._id} style={{textDecoration:"none"}}><span>More info</span></Link>
                        </Card>)}
                </div>
            </div>
        );
    }
}

export default CourseCard;
