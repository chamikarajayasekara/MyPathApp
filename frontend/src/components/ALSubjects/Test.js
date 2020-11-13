import React, {Component} from 'react';
import AlStream from "./ALStream";
import {Route} from "react-router-dom";
import Arts from "./Arts/Arts";
import Commerce from "./Commerce/Commerce";

class Test extends Component {
    render() {
        return (
            <div>
                <AlStream/>
                <div className="row">
                    <div className="col-md-12">
                        <Route exact path="/Arts" component={Arts}/>
                        <Route exact path="/Commerce" component={Commerce}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
