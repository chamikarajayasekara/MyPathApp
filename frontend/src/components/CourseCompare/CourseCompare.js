import React, {Component} from 'react';
import CoursesBar from "./CoursesBar";
import CoursebarRight from "./CoursebarRight";

class CourseCompare extends Component {
    state={
        status:false
    }

    handleLeft = () =>{
       this.setState({
           status:true
       })
    }

    render() {
        let {status} = this.state;
        console.log({status})
        const renderAuthButton = () => {
            if (status === true) {
                return <div className="row">
                    <div className="col-md-1 mt-4">Name</div>
                    <div className="col-md-5 mt-4 ml-2"><CoursesBar onClick={this.handleLeft}/></div>
                    <div className="col-md-5 mt-4"><CoursesBar/></div>
                </div>
            }else {
                return <div className="row">
                    <div className="col-md-6 mt-4 "><CoursesBar onClick={this.handleLeft}/></div>
                    <div className="col-md-6 mt-4"><CoursebarRight/></div>
                </div>
            }
        }
        return (
            renderAuthButton()
        );
    }
}

export default CourseCompare;
