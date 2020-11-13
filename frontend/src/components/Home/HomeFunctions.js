import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";
import './Home.css'
import {Link} from "react-router-dom";
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

class HomeFunctions extends Component {
    render() {
        return (
            <div>
                <div className="card-body bg-light">
                    <Link to="/courses" style={{textDecoration:"none"}}>
                        <div className="row">
                        <div className="col-md-3">
                            <FontAwesome
                                name="fas fa-search"
                                size="2x"
                                className="home-col-2-icon"
                            />
                        </div>
                        <div className="col-md-9 text-left home-col">
                            <h5 className="home-h5">Courses Finder</h5>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="card-body bg-light mt-2">
                    <Link to="/compare" style={{textDecoration:"none"}}>
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesome
                                name="fas fas fa-th-list"
                                className="home-col-2-icon"
                                size="2x"/>
                        </div>
                        <div className="col-md-9 text-left  home-col">
                            <h5 className="home-h5">Course Compare</h5>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="card-body bg-light mt-2">
                    <Link to="/CareerTest" style={{textDecoration:"none"}}>
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesome
                                name="fas fa-laptop"
                                className="home-col-2-icon"
                                size="2x"/>
                        </div>
                        <div className="col-md-9 text-left  home-col">
                            <h5 className="home-h5">Your Career prediction</h5>
                        </div>
                    </div>
                    </Link>
                    </div>
                <div className="card-body bg-light mt-2 mb-l-5">
                    <Link to="/StateUniversities" style={{textDecoration:"none"}}>
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesome
                                name="fas fa-graduation-cap"
                                className="home-col-2-icon"
                                size="2x"/>
                        </div>
                        <div className="col-md-9 text-left  home-col">
                            <h5 className="home-h5">Identify your State University Degree</h5>
                        </div>
                   </div>
                    </Link>
                </div>
                <div className="card-body bg-light mt-2 mb-l-5">
                    <Link to="/Alsubjects" style={{textDecoration:"none"}}>
                        <div className="row">
                            <div className="col-md-3">
                                <FontAwesome
                                    name="fas fa-book"
                                    className="home-col-2-icon"
                                    size="2x"/>
                            </div>
                            <div className="col-md-9 text-left  home-col">
                                <h5 className="home-h5">What can I do for the G.C.E A/L</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeFunctions;
