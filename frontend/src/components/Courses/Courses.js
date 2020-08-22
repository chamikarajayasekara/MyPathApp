import React, {Component} from 'react';
import TestLiftionMain from "./TestLiftionMain";


class Courses extends Component {
    state={
        current:false
    }
    render() {
        let {current} = this.state;
        console.log({current})
        const renderAuth = () =>{

        }
        return (
            <div className="row">
                <div className="col-md-12 ">
                    <TestLiftionMain/>
                </div>
            </div>
        );
    }
}

export default Courses;
