import React, {Component} from 'react';
import {notification} from "antd";
import axios from 'axios'
import Redirect from "react-router-dom/es/Redirect";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

class Log extends Component {
    state = {
        email: '',
        password: '',
        CurrentUser:[]

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email , "hi")
        const {email,password} = this.state;
        const user = {
            email:email,
            password:password,
        };

        axios.post(`http://localhost:5000/api/auth/login`, user)
            .then(res => {
                console.log(res);
                console.log(res.data)
                const tokenNumber = res.data.token;
                const userName = res.data.name;
                console.log(res.data.loginSuccess);
                const localSt = localStorage.setItem('tokenNumber',tokenNumber);
                const username = localStorage.setItem('userName',userName)
                const loginSuccess =  res.data.success;
                console.log(loginSuccess)
                localStorage.setItem('cool-jwt', res.data.token);
                if (loginSuccess === true) window.location.replace("/profile")

            })
            .catch(error => {
                notification.error({
                    message: 'Login to Panel',
                    description: 'Wrong user name or password Please try again!'
                });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <input type="text" name="password" onChange={this.handleChange} />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Log;
// class Log extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             error: ''
//         };
//     }
//
//     change(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//
//     submit(e) {
//         e.preventDefault();
//         axios.post(`http://localhost:5000/api/auth/login`, {
//             email: this.state.email,
//             password: this.state.password
//         }).then(res => {
//             console.log(res)
//             localStorage.setItem('cool-jwt', res.data.token);
//             const loginSuccess =  res.data.success;
//             console.log(loginSuccess)
//             if (loginSuccess === true){
//                 this.props.history.push('/profile')
//             }else {
//                 this.props.history.push('/login')
//             }
//         }).catch(() => this.setState({
//
//             error: true
//
//         }));
//     }
//
//     render() {
//         const { error } = this.state;
//         return (
//             <div>
//                 <form onSubmit={e => this.submit(e)}>
//                     <label>email</label><input type="text" name="email" onChange={e => this.change(e)} />
//                     <label>password</label><input type="text" name="password" onChange={e => this.change(e)} />
//                     <button type="submit">Submit</button>
//                 </form>
//                 {error && <p>Invalid credentials</p>}
//             </div>
//         );
//     }
//
// }
//
// export default Log;
