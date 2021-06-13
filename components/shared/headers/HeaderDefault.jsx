import React, { Component } from 'react';
import NavigationDefault from '../navigation/NavigationDefault';

import HeaderActions from './modules/HeaderActions';

/*
import MenuCategories from './modules/MenuCategories';
*/
import SearchHeader from './modules/SearchHeader';
import { stickyHeader } from '../../../utilities/common-helpers';

class HeaderDefault extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    render() {
        return (
            <header
                className="header header--1"
                data-sticky="true">
                <div className="header__top">
                    <div className="ps-container">
                        <div className="header__left">
                        </div>
                        <div className="header__center">
                            {/*<SearchHeader />*/}
                        </div>
                       <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
                </div> 
                <NavigationDefault />
            </header>
        );
    }
}

export default HeaderDefault;
