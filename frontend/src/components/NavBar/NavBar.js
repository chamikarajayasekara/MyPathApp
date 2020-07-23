import React, {useState} from 'react';
import 'antd/dist/antd.css'
import './NavBar.css'
import LeftMenu from "./RightMenu/LeftMenu";
import DrawerTog from "./Drawer";


function NavBar () {

        return (
            // <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <nav className="menu" style={{  zIndex: 5, width: '100%' }}>
                <div className="logo">
                    <a href="/"><img src="/images/logo.jpg" alt="" className="logopic"/></a>
                </div>
                <div className="menu__container">
                    <div className="menu_left">
                        <LeftMenu mode="horizontal" />
                    </div>
                    <DrawerTog/>
                </div>
            </nav>
        );
}

export default NavBar;
