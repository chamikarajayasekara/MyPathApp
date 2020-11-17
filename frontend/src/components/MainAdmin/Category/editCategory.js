import React, {Component} from 'react';
import axios from "axios";
import {notification} from "antd";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';

class EditCategory extends Component {
    state={
        name:'',
    }

    componentDidMount() {
        const url = "http://localhost:5000/api/category/det/"+this.props.match.params.id;
        const token =  localStorage.getItem('admin-token');
        console.log(url)
        axios.get("http://localhost:5000/api/category/details/"+this.props.match.params.id,{ headers: {"auth-token": token} })
            .then(res=>{
                const name = res.data.name;
                console.log(res.data);
                this.setState({name})

            })
            .catch(e =>{
                console.log(e);
            })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const token =  localStorage.getItem('admin-token');
        const { match: { params } } = this.props;
        const {name} = this.state;
        const user = {
            name:name,
        }
    axios.put("http://localhost:5000/api/category/update/"+this.props.match.params.id, user,{ headers: {"auth-token": token} })
            .then(res => {
                console.log(res)
                console.log(res.data);
                notification.success({
                    message: 'Edit Admin',
                    description: "Thank you! You're successfully edit data!",
                });
            })
            .catch(error => {
                console.log(error)
                notification.error({
                    message: 'Category edit Failed',
                    description: 'Please check again!'
                });
            });
    }

        render() {
        console.log(this.props)
        return (
            <div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6 bg-light p-3 mt-3 border border-info">
                        <h4 className="admin-login-h2"><EditIcon/>&nbsp;Edit category name</h4>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <TextField id="outlined-basic" label="Name" variant="outlined" className="input-bar my-2" type="text" value={this.state.name} name="name" onChange={this.handleChange} required  />
                            <br/>
                            {/*<button className="login" type="submit"><VerticalAlignTopOutlined />&nbsp;Add Admin</button>*/}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{backgroundColor:"#01579b"}}
                                className="float-right text-white mt-2 mb-3"
                                endIcon={<EditIcon/>}>
                                Edit Category
                            </Button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default EditCategory;