import axios from 'axios'
import AuthHeader from "../auth-header/AuthHeader";

class UserService {
    getPublicContent(){
        return axios.get('')
    }
}

export default new UserService()
