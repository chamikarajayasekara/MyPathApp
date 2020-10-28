import React, {Component} from 'react';
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

class CoursebarRight extends Component {
    state = {
        courses: [],
        details: '',
        status: false,
        current:false,
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/list/')
            .then(res => {
                console.log(res.data);
                this.setState({
                    courses: res.data
                })
            })
        axios.get('http://localhost:5000/api/category/list')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    category:res.data
                })
            })
    }

    handleSelect = (val, option) => {
        console.log(val, option);
        console.log(option);
        const result = option;
        console.log(result)
        if (result === null) {
            console.log("null state");
            this.setState({
                current: false,
                details:'',

            })
        } else {
            this.setState({
                details: result,
                current: true,
            })
        }
        const x = this.state.status = true;
        console.log(x)
    }
    render() {
        // console.log(this.state.result.name)
        let {status} = this.state;
        console.log({status})
        let {details} = this.state;
        console.log({details})
        let {current} = this.state;
        console.log({current})
        let {loading} = this.state;
        console.log({loading})
        const renderAuthButton = () => {
            if (status === true) {
                if (current === true) {
                    const details = this.state.details
                    return <div className="row mt-3">
                        <div className="col-md-12 mt-1 text-left">
                            <hr/>
                            <div className="row size1">
                                <div className="col-md-12"> <span>{details.name}</span></div>
                            </div><hr/>
                            <div className="row size1">
                                <div className="col-md-12"> <span>{details.institute}</span></div>
                            </div><hr/>
                            <div className="row size1">
                                <div className="col-md-12"> <span>{details.category}</span></div>
                            </div><hr/>
                            <div className="row size1">
                                <div className="col-md-12"> <span>{details.level}</span></div>
                            </div><hr/>
                            <div className="row size2">
                                <div className="col-md-12"><span>{details.description}</span></div>
                            </div><hr/>

                        </div>

                    </div>
                }
                //     else if (current === false){
                //         return <CourseCard/>
                //     }
                //
                // } else{
                //     return <CourseCard/>
                // }

            }
        }

        return (
            <div>
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.courses}
                    getOptionLabel={(option) => option.name}
                    style={{width: 600}}
                    onChange={this.handleSelect}
                    renderInput={(params) => <TextField {...params} label="Search your course" variant="outlined"/>}
                />

                <div>
                    {renderAuthButton()}
                </div>

            </div>
        );
    }
}

export default CoursebarRight;
