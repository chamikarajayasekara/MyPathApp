import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Skeleton } from 'antd';

class Skeltons extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <Skeleton active avatar paragraph={{rows: 4}} style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <Skeleton active avatar paragraph={{rows: 4}} style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <Skeleton active avatar paragraph={{rows: 4}} style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <Skeleton  active avatar paragraph={{ rows: 4 }} style={{width:"200px"}} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Skeltons;
