
import React, {Component} from 'react';
import SideMenu from "../AdminPanel/SideMenu/SideMenu";
import AdminNav from "../AdminPanel/AdminNav/AdminNav";
import './profile.css';
import Dashboard from "../AdminPanel/Dashboard/Dashboard";
import CourseAdd from "../AdminPanel/CourseAdd/CourseAdd";
import {Link, Route} from "react-router-dom";
import CourseList from "../AdminPanel/CourseList/CourseList";
import PersonalDetails from "../AdminPanel/PersonalDetails/PersonalDetails";
import CourseDetails from "../AdminPanel/CourseList/CourseDetails";


class Profile extends Component {
        render() {
                return (
                    <div className="Admin-panel">
                        <AdminNav/>
                        <div className="row sidebar-dashboard">
                            <div className="col-lg-3 sidemenu-tab">
                                <SideMenu/>
                            </div>
                            <div className="col-lg-9">
                                <Route exact path="/dashboard" component={Dashboard}/>
                                <Route path="/CourseAdd" component={CourseAdd}/>
                                <Route path="/CourseList" component={CourseList}/>
                                <Route path="/PersonalDetails" component={PersonalDetails}/>
                                <Route path="/CourseDetails/:id" component={CourseDetails}/>
                            </div>
                        </div>

                    </div>

                );
            }
    }

export default Profile;
