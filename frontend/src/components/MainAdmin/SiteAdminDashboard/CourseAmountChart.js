import React, {Component} from 'react';
import axios from "axios";
import {Bar} from 'react-chartjs-2';


class CourseAmountChart extends Component {
    state = {
        courses: '',
        courseList: [],
        name:[],
    }


    componentDidMount() {
        const token =  localStorage.getItem('admin-token');
        axios.get('http://localhost:5000/api/courses/cat',{ headers: {"auth-token": token}})
            .then(res => {
                this.setState({
                    courseList:res.data,
                })
            });

    }

    onChange = () =>{

    }

    render() {
        let name = [];
        let count = [];
        for (let i=0;i<this.state.courseList.length;i++){

            if (name.includes(this.state.courseList[i]._id)){
                console.log("exist")
            }else {
                name.push(this.state.courseList[i]._id)
                count.push(this.state.courseList[i].count)
            }
        }
        console.log(name)
        console.log(count)
        const data = {
            labels: name,
            datasets: [
                {
                    label: 'Number of courses',
                    backgroundColor: '#01579b',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data:count
                }
            ]
        }

        return (

            <div>
                <Bar
                    data= {data}
                    options={{
                        title:{
                            display:true,
                            text:'Number of courses for each Institutes',
                            fontSize:15
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
                {/*<div>{a}{b}</div>*/}

            </div>
        );
    }
}

export default CourseAmountChart;
