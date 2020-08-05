import React, {Component} from 'react';

import UserlistNav from "./UserlistNav";

class SiteAdminUsersList extends Component {

    render() {
        return (
        <div className="row">
            <div className="col-md-12">
                <UserlistNav/>
            </div>

        </div>
        );
    }
}

export default SiteAdminUsersList;
