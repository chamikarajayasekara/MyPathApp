import React, {Component} from 'react';
import './Home.css'
import HomeFunctions from "./HomeFunctions";


class Home extends Component {
    render() {
        return (
            <div className="row home">
                <div className="col-md-6 home-col-1">
                    <div className="row">
                        <h2 className="home-h4">Dream it. Wish it. Do it</h2>
                    </div>
                    <div className="row mt-lg-5 ">
                        <h5 className="text-light">An investment in knowledge pays the best interest <br></br>– Benjamin Franklin</h5>
                    </div>
                </div>
                <div className="col-md-5 home-col-2 mt-2 mb-2">
                    <HomeFunctions/>
                </div>
            </div>
        );
    }
}

export default Home;
