import axios from 'axios';
import {AUTH_USER} from "./types";
//
// export function registerUser(dataToSubmit){
//     const request = axios.post(` http://localhost:5000/api/users/register`,dataToSubmit)
//         .then(response => response.data);
//
//     return {
//         type: REGISTER_USER,
//         payload: request
//     }
// }
//
// export function loginUser(dataToSubmit){
//     const request = axios.post(` http://localhost:5000/api/users/login`,dataToSubmit)
//         .then(response => response.data);
//
//     return {
//         type: LOGIN_USER,
//         payload: request
//     }
// }

export function auth(){
    const request = axios.get(` http://localhost:5000/api/users/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

// export function logoutUser(){
//     const request = axios.get(` http://localhost:5000/api/users/logout`)
//         .then(response => response.data);
//
//     return {
//         type: LOGOUT_USER,
//         payload: request
//     }
// }

