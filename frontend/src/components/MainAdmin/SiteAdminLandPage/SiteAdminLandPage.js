import React, {Component} from 'react';
import SideMenu from "../../Login/AdminPanel/SideMenu/SideMenu";
import {Link, Route} from "react-router-dom";
import Dashboard from "../../Login/AdminPanel/Dashboard/Dashboard";
import CourseAdd from "../../Login/AdminPanel/CourseAdd/CourseAdd";
import CourseList from "../../Login/AdminPanel/CourseList/CourseList";
import PersonalDetails from "../../Login/AdminPanel/PersonalDetails/PersonalDetails";
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
// import EditBookComponent from "../InstituteList/test";

class SiteAdminLandPage extends Component {
    render() {
        return (
            <div className="Admin-panel">
                <SiteAdminNav/>
                <div className="row sidebar-dashboard">
                    <div className="col-lg-3 sidemenu-tab">
                        <AdminSideBar/>
                    </div>
                    <div className="col-lg-8">
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
                        <Route path="/addAdmin" component={AddAdmin}/>
                        <Route path="/adminTable" component={AdminTable}/>

                        {/*<Route path="/test/:id" component={EditBookComponent}/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteAdminLandPage;
