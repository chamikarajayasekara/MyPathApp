import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CourseListnav extends Component {
    render() {
        return (
            <div className="row mt-lg-2">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <Link to="/CourseAdd" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs content text-light">Add Course</li>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/CourseList" style={{textDecoration:"none"}}>
                        <li className="sidebar-tabs content text-light">My Courses</li>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CourseListnav;
