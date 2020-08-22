import React, {Component} from 'react';
import axios from 'axios';
import {notification} from "antd";
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class PersonalDetails  extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
        })
    }
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile);
        axios.post("http://localhost:5000/image/upload", data, { })
            .then(res => { // then print response status
                console.log(res.data)
                notification.success({
                    message: 'Add Courses',
                    description: "Thank you! You're successfully added data!",
                });
            })
            .catch(error => {
                console.log(error);
                notification.error({
                    message: 'Course Add Failed',
                    description: error+' '+'Please try again!'
                });
            })
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="offset-md-3 col-md-6">
                        <div class="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
                        </div>
                        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                    </div>
                </div>
            </div>
        );
    }
}

    export default PersonalDetails;
