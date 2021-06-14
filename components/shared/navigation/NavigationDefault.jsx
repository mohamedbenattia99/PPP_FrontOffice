import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opps! Quelque chose ne marche pas.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo" >
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="CONCEPT"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="navigation__right">
                        <Menu
                            data={menuData.menuPrimary.menu_1}
                            className="menu"
                        />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
