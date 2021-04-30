import React from 'react';
import menuData from '../../../../public/static/data/menu.json';
import Menu from '../../../elements/menu/Menu';


const MenuCategories = () => (
    <Menu data={menuData.product_categories} className="menu--dropdown" />
);

export default MenuCategories;
