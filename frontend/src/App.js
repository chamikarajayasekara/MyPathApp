import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/about";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
        {/*<header>*/}
        {/*    <div className="col-lg-12">*/}
        {/*        <NavBar/>*/}
        {/*    </div>*/}
        {/*</header>*/}
        {/*<section>*/}
        {/*    <div className="row">*/}
        {/*        <div className="col-md-12">*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <header className="mb-lg-2">
            <NavBar/>
        </header>
        <main>
            <div className="container">
                <Switch>
                   <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/courses" component={Courses}/>
                </Switch>
            </div>
        </main>
    </div>
  );
}

export default App;
