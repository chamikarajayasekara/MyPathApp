import React, {Component} from 'react';
import axios from "axios";
import './SiteAdminDashboard.css';
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import UsergroupDeleteOutlined from "@ant-design/icons/lib/icons/UsergroupDeleteOutlined";
import FontAwesome from "react-fontawesome";
import { Card, Col, Row } from 'antd';
import {Link} from "react-router-dom";
class SiteAdminDashboard extends Component {
    state={
        institutes:'',
        users:'',
        courses:''
    }

    componentDidMount() {
        const token =  localStorage.getItem('admin-token');
        axios.get('http://localhost:5000/api/institute/details',{ headers: {"auth-token": token}})
            .then(res => {
            this.setState({
                institutes: res.data.length,
            });
            console.log(res.data.length)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('http://localhost:5000/api/auth',{ headers: {"auth-token": token}})
            .then(res => {
                this.setState({
                    users:res.data.length,
                })
                console.log(res.data.length)
            })

        axios.get('http://localhost:5000/api/courses/details',{ headers: {"auth-token": token}})
            .then(res => {
                this.setState({
                    courses:res.data.length,
                })
                console.log(res.data.length)
            })
    }

    render() {
        return (
            <div className="site-card-wrapper mt-lg-5 ">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card bordered={false} className="box" >
                           <div className="row text-center">
                               <div className="col-md-12">
                                   <FontAwesome
                                       name="fas fa-university"
                                       size="2x"
                                       className="home-col-2-icon text-center"
                                   />
                               </div>
                           </div>
                               <div className="row pt-2 text-center">
                                   <div className="col-md-12">
                                       <span>{this.state.institutes}</span>
                                   </div>
                               </div>
                               <div className="row pb-1 text-center">
                                   <div className="col-md-12">
                                       <span>Institutes</span>
                                   </div>
                               </div>
                            <hr className="line"/>
                            <span><Link to="/instituteTable" style={{textDecoration:"none"}}>More info&nbsp;&nbsp;
                                <FontAwesome
                                    name="fas fa-chevron-right"
                                    size="1x"
                                    className=" text-center"
                                /></Link></span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} className="box">
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <FontAwesome
                                        name="fas fa-user"
                                        size="2x"
                                        className="home-col-2-icon text-center"
                                    />
                                </div>
                            </div>
                            <div className="row pt-2 text-center">
                                <div className="col-md-12">
                                    <span>{this.state.users}</span>
                                </div>
                            </div>
                            <div className="row pb-1 text-center">
                                <div className="col-md-12">
                                    <span>Users</span>
                                </div>
                            </div>
                            <hr  className="line"/>
                            <span><Link to="/usersTable" style={{textDecoration:"none"}}>More info&nbsp;&nbsp;
                                <FontAwesome
                                    name="fas fa-chevron-right"
                                    size="1x"
                                    className=" text-center"
                                />
                            </Link>
                            </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false} className="box">
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <FontAwesome
                                        name="fas fa-graduation-cap"
                                        size="2x"
                                        className="home-col-2-icon text-center"
                                    />
                                </div>
                            </div>
                            <div className="row pt-2 text-center">
                                <div className="col-md-12">
                                    <span>{this.state.courses}</span>
                                </div>
                            </div>
                            <div className="row pb-1 text-center">
                                <div className="col-md-12">
                                    <span>Courses</span>
                                </div>
                            </div>
                            <hr  className="line"/>
                            <span><Link to="/instituteTable" style={{textDecoration:"none"}}>More info&nbsp;&nbsp;
                                <FontAwesome
                                    name="fas fa-chevron-right"
                                    size="1x"
                                    className=" text-center"
                                /></Link></span>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SiteAdminDashboard;
