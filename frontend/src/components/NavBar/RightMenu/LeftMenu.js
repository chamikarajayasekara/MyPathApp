import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

function LeftMenu (props) {
    const username = localStorage.getItem("userName")
    console.log(username)
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="mail" className="list">
                    <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </Menu.Item>
                <Menu.Item key="about">
                   <Link to="/about" style={{textDecoration:"none"}}>About Us</Link>
                </Menu.Item>
                <Menu.Item key="courses">
                    <Link to="/courses" style={{textDecoration:"none"}}>Courses</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login" style={{textDecoration:"none"}}>Institute Login</Link>
                </Menu.Item>
            </Menu>
        );

}

export default LeftMenu;
