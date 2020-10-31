import React, {Component} from 'react';
import axios from "axios";
import "./logout.css";

import { Popconfirm,message  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PoweroffOutlined from "@ant-design/icons/lib/icons/PoweroffOutlined";

class Logout extends Component {
    constructor() {
        super();
    }
    logout = () =>{
        const token =  localStorage.getItem('cool-jwt');
        axios.get(`http://localhost:5000/api/auth/logout`,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res.data);
                localStorage.clear("userName");
                localStorage.clear("tokenNumber");
                window.location.replace("/login");
            })
    }

    render() {
        function cancel(e) {
            console.log(e);
            message.error('You are sill logged in');
        }
        return (
            <div>
                <Popconfirm
                    title="Are you sure you want to log out?"
                    onConfirm={this.logout}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                    size="2"
                    className="float-right mt-1 mb-1"

                    icon={<PoweroffOutlined style={{ color: 'blue' }} />}
                >
                    <a href="#"><PoweroffOutlined /></a>
                    {/*<a href="#">Logout</a>*/}
                    {/*<button className="logoutBtn btn btn-outline-info btn-block">Logout</button>*/}
                </Popconfirm>
            </div>
        );
    }
}

export default Logout;
