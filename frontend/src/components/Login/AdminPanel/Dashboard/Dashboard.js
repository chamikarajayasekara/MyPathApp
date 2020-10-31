import React, {Component} from 'react';
import Charts from "./Charts";

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8"><Charts/></div>
                <div className="col-md-2"></div>
            </div>
        );
    }
}

export default Dashboard;
