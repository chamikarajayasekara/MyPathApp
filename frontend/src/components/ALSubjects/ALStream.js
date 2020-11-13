import React, {Component} from 'react';
import { Tabs } from 'antd';
import Arts from "./Arts/Arts";
import Commerce from "./Commerce/Commerce";
import Bio from "./Bio/Bio";

function callback(key) {
    console.log(key);
}

class AlStream extends Component {
    render() {
        const { TabPane } = Tabs;
        return (
        <div className="row">
            <div className="col-md-12">
                <Tabs defaultActiveKey="1" onChange={callback} centered>
                    <TabPane tab="ARTS" key="1">
                        <Arts/>
                    </TabPane>
                    <TabPane tab="COMMERCE" key="2">
                        <Commerce/>
                    </TabPane>
                    <TabPane tab="BIOLOGICAL SCIENCE" key="3">
                        <Bio/>
                    </TabPane>
                    <TabPane tab="PHYSICAL SCIENCE" key="4">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="ENGINEERING TECHNOLOGY" key="5">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="BIO SYSTEMS TECHNOLOGY" key="6">
                        BIOSYSTEMS TECHNOLOGY
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
    }
}

export default AlStream;
