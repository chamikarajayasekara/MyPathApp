import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import CourseList from "../../Login/AdminPanel/CourseList/CourseList";
import SiteAdminDashboard from "../SiteAdminDashboard/SiteAdminDashboard";
import SiteAdminUsersList from "../SiteAdminUsersList/SiteAdminUsersList";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminList from "../AdminDetails/AdminList";
import InstituteList from "../InstituteList/InstituteList";
import SiteAdminNav from "../../Login/AdminPanel/SiteAdminNav/SiteAdminNav";
import AddInstitute from "../InstituteList/AddInstitute";
import InstituteTable from "../InstituteList/instituteTable";
import EditInstituteList from "../InstituteList/EditInstituteList";
import AddUsers from "../SiteAdminUsersList/AddUsers";
import UsersTable from "../SiteAdminUsersList/Userstable";
import EditUsersList from "../SiteAdminUsersList/EditUsersList";
import AddAdmin from "../AdminDetails/AddAdmin";
import AdminTable from "../AdminDetails/AdminTable";
import ListOfCourses from "../courseList/ListOfCourses";
import DetailsOfCourse from "../courseList/DetailsOfCourse";
import EditAdminList from "../AdminDetails/EditAdminList";
import BackToTop from "../bavkToTop/BackToTop";
import ScrollToTop from "../bavkToTop/ScrollToTop";



class SiteAdminLandPage extends Component {

    render() {

        return (

            <div className="container-fluid position-static mb-2 " >
                <div className="row">
                    <div className="col-md-12 border border-bottom-1 ">
                        <SiteAdminNav/>
                    </div>
                </div>
                <div className="row " style={{height:"100vh"}}>
                    <div className="col-md-3  bg-light position-static ">
                        <AdminSideBar/>
                    </div>

                    <div className="col-md-9  ">
                        <div className="row">
                            <div className="col-md-12">
                                <Route exact path="/adminDashboard" component={SiteAdminDashboard}/>
                                <Route path="/userList" component={SiteAdminUsersList}/>
                                <Route path="/CourseList" component={CourseList}/>
                                <Route path="/adminDetails" component={AdminList}/>
                                <Route path="/institutes" component={InstituteList}/>
                                <Route exact path="/addInstitute" component={AddInstitute}/>
                                <Route path="/instituteTable" component={InstituteTable}/>
                                <Route path="/editInstitute/:id" component={EditInstituteList}/>
                                <Route path="/addUsers" component={AddUsers}/>
                                <Route path="/usersTable" component={UsersTable}/>
                                <Route path="/editUser/:id" component={EditUsersList}/>
                                <Route path="/editAdmin/:id" component={EditAdminList}/>
                                <Route path="/addAdmin" component={AddAdmin}/>
                                <Route path="/adminTable" component={AdminTable}/>
                                <Route path="/ListOfCourses" component={ListOfCourses}/>
                                <Route path="/DetailsOfCourse/:id" component={DetailsOfCourse}/>

                                {/*<Route path="/test/:id" component={EditBookComponent}/>*/}
                              <ScrollToTop/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteAdminLandPage;
