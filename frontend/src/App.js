import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/about";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import Profile from "./components/Login/profile/Profile";
import AuthComponent from "./components/Login/AtheComp/AuthComponent";
import CourseCompare from "./components/CourseCompare/CourseCompare";
import CareerPrediction from "./components/CareerPrediction/CareerPrediction";
import StateUniversity from "./components/StateUniversities/StateUniversity";
import SiteAdminLogging from "./components/MainAdmin/SiteAdmin/SiteAdminLogging";
import SiteAdminLandPage from "./components/MainAdmin/SiteAdminLandPage/SiteAdminLandPage";
import courseDet from "./components/Courses/courseDet";
import Alland from "./components/ALSubjects/Alland";
import Arts from "./components/ALSubjects/Arts/Arts";
import Commerce from "./components/ALSubjects/Commerce/Commerce";





class App extends Component{
    constructor() {
        super();
    }

  render() {
      return (
          <div className="App">
              <header>
                  <NavBar/>
              </header>
              <main>
                  <div className="container-fluid">
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/about" component={About}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/courses" component={Courses}/>
                          <Route path="/compare" component={CourseCompare}/>
                          <Route path="/CareerTest" component={CareerPrediction}/>
                          <Route path="/StateUniversities" component={StateUniversity}/>
                          <Route path="/admin" component={SiteAdminLogging}/>
                          <Route path="/courseDet/:id" component={courseDet}/>
                          <Route path="/Alsubjects" component={Alland}/>
                          <AuthComponent>
                              <Route path={'/profile'} component={Profile} />
                              <Route path={'/siteLanding'} component={SiteAdminLandPage}/>

                          </AuthComponent>
                      </Switch>
                  </div>
              </main>
          </div>
      );
  }

}

export default App;
