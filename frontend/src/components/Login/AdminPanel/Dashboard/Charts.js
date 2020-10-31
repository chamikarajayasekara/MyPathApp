import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';



class Charts extends Component {

    render() {
        const state = {
            labels: ['January', 'February', 'March',
                'April', 'May'],
            datasets: [
                {
                    label: 'Rainfall',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'aquamarine',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                }
            ]
        }
        return (
            <div>
                <Line
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
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

export default Charts;
