
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
import SiteAdminNav from "../AdminPanel/SiteAdminNav/SiteAdminNav";
import AdminSideBar from "../../MainAdmin/AdminSideBar/AdminSideBar";
import CourseEdit from "../AdminPanel/CourseEdit/CourseEdit";


class Profile extends Component {
        render() {
                return (
                    <div className="container-fluid position-static mb-2 " >

                        <div className="row">
                            <div className="col-md-12 border border-bottom-1 ">
                                <AdminNav/>
                            </div>
                        </div>
                        <div className="row " style={{height:"100vh"}}>
                            <div className="col-md-3  bg-light position-static ">
                                <SideMenu/>
                            </div>
                            <div className="col-md-9  ">
                                <div className="row">
                                    <div className="col-md-12">
                                    <Route exact path="/dashboard" component={Dashboard}/>
                                    <Route path="/CourseAdd" component={CourseAdd}/>
                                    <Route path="/CourseList" component={CourseList}/>
                                    <Route path="/PersonalDetails" component={PersonalDetails}/>
                                    <Route path="/CourseDetails/:id" component={CourseDetails}/>
                                    <Route path="/CourseEdit/:id" component={CourseEdit}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                );
            }
    }

export default Profile;
