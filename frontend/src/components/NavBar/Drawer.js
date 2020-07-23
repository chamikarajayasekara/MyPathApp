import React, {Component, useState} from 'react';
import { Drawer} from 'antd';
import FontAwesome from "react-fontawesome";
import LeftMenu from "./RightMenu/LeftMenu";
import RightMenu from "./RightMenu/RightMenu";


function DrawerTog () {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
        return (
            <div>
                <button className="btn btn-outline-info mobile-button"  onClick={showDrawer}>
                    <FontAwesome
                        name="fas fa-align-justify"
                        size="2x"
                    />
                </button>
                <Drawer
                    title="Welcome to MyPath"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftMenu mode="inline" />
                    <RightMenu mode="inline" />
                </Drawer>
            </div>
        );
}

export default DrawerTog;
