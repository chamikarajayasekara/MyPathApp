import React, {Component} from 'react';
import axios from "axios";
import SearchForm from "./search-form";
import CharacterList from "./characterslist";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Skeltons from "./Skeltons";
import {Link} from "react-router-dom";


class TestLift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            category:[],
            value:[],
            name:'',
            size:false,
            selected:[],
            status:false,
            courses:[],
            way:false,
            readyState:false,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/courses/list')
            .then(res=>{
                // console.log(res.request.readyState)
                this.setState({
                    courses:res.data,
                    readyState:true,
                })
            })
        axios.get('http://localhost:5000/api/category/list')
            .then(res=>{
                this.setState({
                    category:res.data
                })
            })
    }
    handleCheckBox = (e,option) =>{
        let selected = [...this.state.selected]
        selected = e.target.value
        if (option === true){
            this.setState({status:true})
            this.setState({selected})
            this.setState({way:true})
        }else {
            this.setState({status:false})
            this.setState({selected:''})
            this.setState({way:false})
        }
        this.setState({ readyState:false})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    axios.post('http://localhost:5000/api/courses/pass?category='+this.state.selected+'&level=Degree')
        .then(res=>{
            this.setState({
                courses:res.data,
                size:res.data.length,
                readyState:true
            })
        }).catch(e =>{
        this.setState({
            courses:e,
        })
    })
}

    searchTerm = (searchTerm,e) =>{
        this.setState({searchTerm})
        this.setState({way:false})
    }

    render() {
        const characters = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        );

        let {way} = this.state;
        let {size} = this.state;
        let {readyState} = this.state;



        //
        // const loadFunction = () =>{
        //     if (readyState === false){
        //         return   <div className="row">
        //             <div className="col-md-2 mt-1 ml-1">
        //             </div>
        //             <div className="col-md-8 mt-1">
        //              <Skeltons/>
        //             </div>
        //         </div>
        //     }
        // }

      const fuck =  () => {
        { this.state.courses.map(course =>
            <Link to={"/courseDet/"+course._id} style={{textDecoration:"none"}}>
                <div className="card d-flex  flex-wrap card-client mb-3 mt-3 ml-lg-3 text-center" key={course._id}>
                    <div className="card-header card-client-head">
                        <p className="text-left">{course.institute}</p>
                        <p className="text-white">{course.name}</p>
                    </div>
                    <div className="card-body">
                        <p>{course.category}&nbsp;{course.level}</p>
                    </div>
                </div>
            </Link>)}
        }

        const renderAuthButton = () => {
            if (way === false  ){
                return  <div className="row">
                            <div className="col-md-2 mt-1 ml-1">
                                <FormControl component="fieldset" >
                                    <FormLabel component="legend">Filter from Categories</FormLabel>
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
                            </div>
                            <div className="col-md-9 mt-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <SearchForm onChange={this.searchTerm}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {readyState? <CharacterList characters={characters}  /> : <Skeltons/>}
                                    </div>
                                </div>
                            </div>
                </div>
            }else if(way === true){
                return <div className="row">
                    <div className="col-md-2 mt-1 ml-1">
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Filter from Categories</FormLabel>
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
                    </div>
                    <div className="col-md-9 mt-1">
                        <div className="row">
                            <div className="col-md-12">
                                <SearchForm onChange={this.searchTerm}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row mt-3">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-11">
                                        <h3 className="text-left">"{this.state.selected}"&nbsp;&nbsp;({this.state.size}&nbsp;courses found)</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    {readyState? <div className="row">
                                        { this.state.courses.map(course =>
                                            <Link to={"/courseDet/"+course._id} style={{textDecoration:"none"}}>
                                                <div className="card d-flex  flex-wrap card-client mb-3 mt-3 ml-lg-3 text-center" key={course._id}>
                                                    <div className="card-header card-client-head">
                                                        <p className="text-left">{course.institute}</p>
                                                        <p className="text-white">{course.name}</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{course.category}&nbsp;{course.level}</p>
                                                    </div>
                                                </div>
                                            </Link>)}
                                    </div> : <Skeltons/>}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        }
        return (
            <div>
                {renderAuthButton()}
                {/*{loadFunction()}*/}
                {/*<Skeleton active avatar paragraph={{ rows: 4 }} style={{width:"250"}} size={"small"}/>*/}
            </div>



        );
    }
}
export default TestLift;


