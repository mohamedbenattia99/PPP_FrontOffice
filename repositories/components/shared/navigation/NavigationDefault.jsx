import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
/*
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
*/

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
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
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="REDSYS"
                                />
                            </a>
                        </Link>
                        {/*<div className="menu--product-categories">*/}
                        {/*    <div className="menu__toggle">*/}
                        {/*        <i className="icon-menu"></i>*/}
                        {/*        <span> Shop by Department</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="menu__content">*/}
                        {/*        <Menu*/}
                        {/*            data={menuData.product_categories}*/}
                        {/*            className="menu--dropdown"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="navigation__right">
                        <Menu
                            data={menuData.menuPrimary.menu_1}
                            className="menu"
                        />

                        <ul className="navigation__extra">
                           {/* <li>
                                <Link href="/account/order-tracking">
                                    <a>Suivre votre commande</a>
                                </Link>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
