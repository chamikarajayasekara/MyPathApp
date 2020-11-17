import React, {Component} from 'react';
import axios from "axios";
import './coursecard.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Paper from "@material-ui/core/Paper";


class CourseDet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result:'',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/dets/'+this.props.match.params.id)
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    result:res.data
                })
            })
    }

    render() {
        return (
            <div className="row description-page">
                <div className="col-md-12 bg-light">

                    <div className="row row-1">
                        <div className="col-md-1"></div>
                        <div className="col-md-9">
                            <Breadcrumbs aria-label="breadcrumb" className="ml-1 mt-2 text-white"><span><Link to="/courses" style={{textDecoration:"none",color:"white"}}> Courses</Link> > {this.state.result.name}</span></Breadcrumbs>
                            <h2 className="text-left ml-1"> {this.state.result.name}</h2>

                        </div>
                        <div className="col-md-1 mt-lg-5"><img src="/images/logo.jpg" alt="" className="logopic"/></div>
                    </div>
                    <div className="row row-2">
                        <div className="col-md-8 ">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10 mt-2   ">

                                    <div className="description-col mt-lg-1 p-5 text-left">
                                        <h3>Description About Course</h3>
                                        <p>{this.state.result.description}</p>
                                        <h3>Institute</h3>
                                        <p>{this.state.result.institute}</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>


                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2 ">
                                            <FontAwesome
                                                name="fas fa-graduation-cap"
                                                size="2x"
                                                className="home-col-2-icon mt-2"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12 text-left">
                                                    <h5>Level</h5>
                                                    <p>{this.state.result.level}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2 ">
                                            <FontAwesome
                                                name="fas fa-arrows-v"
                                                size="2x"
                                                className="home-col-2-icon mt-2"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12 text-left">
                                                    <h5>Course Category</h5>
                                                    <p>{this.state.result.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2 ">
                                            <FontAwesome
                                                name="fas fa-calendar"
                                                size="2x"
                                                className="home-col-2-icon mt-2"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12 text-left">
                                                    <h5>Duration</h5>
                                                    <p>{this.state.result.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2 ">
                                            <FontAwesome
                                                name="fas fa-phone"
                                                size="2x"
                                                className="home-col-2-icon mt-2"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12 text-left">
                                                    <h5>Contacts</h5>
                                                    <p>{this.state.result.contacts}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 p-1">
                        <div className="col-md-7 accordion-div">
                            <Paper elevation={3} >
                                <div className="">
                                    <Accordion>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header">
                                            <Typography>
                                                <FontAwesome
                                                    name="fas fa-list-alt"
                                                    size="1x"
                                                    className="home-col-2-icon mt-2"
                                                />&nbsp;&nbsp;Content   </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {this.state.result.content}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>
                                                <FontAwesome
                                                    name="fas fa-money"
                                                    size="1x"
                                                    className="home-col-2-icon mt-2"
                                                />&nbsp;&nbsp;Cost   </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {this.state.result.cost}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography>
                                                <FontAwesome
                                                    name="fas fa-credit-card-alt"
                                                    size="1x"
                                                    className="home-col-2-icon mt-2"
                                                />&nbsp;&nbsp;Payments  </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {this.state.result.payments}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography>
                                                <FontAwesome
                                                    name="fas fa-book"
                                                    size="1x"
                                                    className="home-col-2-icon mt-2"
                                                />&nbsp;&nbsp;Enrollment </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {this.state.result.enrollments}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDet;
