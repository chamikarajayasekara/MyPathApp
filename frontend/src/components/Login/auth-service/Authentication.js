import axios from 'axios'

const API_URL = "http://localhost:5000/api/users/login"
class Authentication {
    login(username,password){
        return axios.post("http://localhost:5000/api/users/login",{
            username,
            password
        })
            .then(response =>{
                if(response.data.token){
                    localStorage.setItem("user", JSON.stringify(response.data))
                    console.log(response.data)
                }
                return response.data
            });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(username,email,password){
        return axios.post(" http://localhost:5000/api/users/register",{
            username,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"))

    }

}

export default new Authentication();
