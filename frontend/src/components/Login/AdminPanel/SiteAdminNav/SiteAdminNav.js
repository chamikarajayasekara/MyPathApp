import React, {Component} from 'react';
import SiteAdminLogout from "../SiteAdminLogout/SiteAdminLogout";

class SiteAdminNav extends Component {
    render() {
        return (
             // <div className="row admin-nav bg-light">
             //    <div className="col-md-3 adminnav-1 text-center">
             //        <h5>MY PATH <span> Admin </span> </h5>
             //     </div>
             //    <div className="col-md-7 adminnav-2 mt-2 mb-1"></div>
             //     <div className="col-md-2  adminnav-4 mt-2 mb-1">
             //        <SiteAdminLogout/>
             //   </div>
             // </div>
            <div className="row bg-light">
                <div className="col-md-12">
                    <SiteAdminLogout/>
                </div>
            </div>
        );
    }
}

export default SiteAdminNav;
