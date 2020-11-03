import React, {Component} from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import axios from "axios";

class CategoryAmountChart extends Component {
    state = {
        courses: '',
        courseList: [],
        name:[],
    }


    componentDidMount() {
        const token =  localStorage.getItem('admin-token');
        axios.get('http://localhost:5000/api/courses/category',{ headers: {"auth-token": token}})
            .then(res => {
                this.setState({
                    courseList:res.data,
                })
            });

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

        const data = {
            labels: name,
            datasets: [
                {
                    label: 'Number of courses',
                    backgroundColor: color,
                    hoverBackgroundColor:colorArray,
                    data:count
                }
            ]
        }

        return (
            <div>
                <Pie
                    data={data}
                    options={{
                        title:{
                            display:true,
                            text:'Number of courses for each category',
                            fontSize:15,
                            className:"float-left"
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default CategoryAmountChart;

let color = ["#1769aa","#2196f3","#4dabf5","#006064",
    "#7986cb","#9575cd","#4a148c","#880e4f",
    '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
