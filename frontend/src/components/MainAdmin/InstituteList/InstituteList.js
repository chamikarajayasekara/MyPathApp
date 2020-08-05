import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import AddInstitute from "./AddInstitute";
import InstituteNav from "./InstituteNav";
import InstituteTable from "./instituteTable";

class InstituteList extends Component {

    render() {
        return (
            <div className="row">
                    <div className="col-md-12">
                        <InstituteNav/>
                        {/*<Route exact path="/addInstitute" component={AddInstitute}/>*/}
                        {/*<Route path="/instituteTable" component={InstituteTable}/>*/}
                    </div>
            </div>
        );
    }
}
export default InstituteList;
