import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/about";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";
import Profile from "./components/Login/Profile";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import Protected from "./components/jwt/Protected";
import AuthComponent from "./components/Login/AtheComp/AuthComponent";


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

                          <Route path="/loginform" component={LoginForm}/>
                          {/*<Authentication>*/}
                          {/*    <Route path="/profile" component={Profile}/>*/}
                          {/*</Authentication>*/}
                          <AuthComponent>
                              <Route path={'/profile'} component={Profile} />
                          </AuthComponent>
                      </Switch>
                  </div>
              </main>
          </div>
      );
  }

}

export default App;
