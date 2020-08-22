import React, {Component} from 'react';
import axios from "axios";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import {library} from "@fortawesome/fontawesome-svg-core";
import CourseCard from "../CourseCompare/CourseCard";

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Filter extends Component {
    state={
        value:[],
        name:'',
        size:false,
        category:[],
        selected:[],
        status:false,
        courses:[]
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/category/list')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    category:res.data
                })
            })
    }

    handleCheckBox = (e,option) =>{
        let selected = [...this.state.selected]
        selected = e.target.value

        console.log(option)
        if (option === true){
            this.setState({status:true})
            this.setState({selected})
        }else {
            this.setState({status:false})
            this.setState({selected:''})
        }

    }
// componentDidUpdate(prevProps, prevState, snapshot) {
//     axios.post('http://localhost:5000/api/courses/pass?category='+this.state.selected+'&level=Degree')
//         .then(res=>{
//             console.log(res.data)
//             this.setState({
//                 courses:res.data,
//                 size:res.data.length,
//             })
//         }).catch(e =>{
//         this.setState({
//             courses:e,
//         })
//     })
// }

    render() {
        console.log(this.state.status)
        console.log(this.state.selected)
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                            <FormControl component="fieldset" onClick={console.log("category clicked")}>
                                <FormLabel component="legend">Filter from Categories</FormLabel>
                                <h1>{this.state.selected}</h1>
                                <FormGroup>
                                    {this.state.category.map(cat =>
                                        <FormControlLabel
                                            control={
                                                <Checkbox key={cat._id} onChange={this.handleCheckBox} value={cat.name} />
                                            }
                                            label={cat.name}
                                        />)}
                                </FormGroup>
                            </FormControl>
                        <div>
                            <ul >
                                { this.state.courses.map(course => <li>{course.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Filter;
