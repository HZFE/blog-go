import React, { PureComponent, Fragment} from 'react';
import {
    Link,
    Switch
} from 'react-router-dom';

import menuFormatter from '../utils/menuFormatter';

export default class Menu extends PureComponent {
    constructor () {
        super();
    }
    
    render () {
        const menuList = menuFormatter(this.props.menu) || [];
        const menuClass = this.props.menuClass || '';
        const menuLinks = menuList.map((menu, index) => {
            if (menu.sub) {
                return (
                    <Fragment key={index}>
                        <Link to={menu.path} key={menuClass + menu.name + menu.path}>{menu.name}</Link>
                        <nav>
                            {menu.sub.map(item => <Link to={item.path} key={menuClass + item.name + item.path}>{item.name}</Link>)}
                        </nav>
                    </Fragment>
                )
            } else {
                return <Link to={menu.path} key={menu.path}>{menu.name}</Link>;
            }
        });
        // console.log(menuList, menuLinks);
        return (
            <nav className={menuClass}>
                {menuLinks}
            </nav>
        );
    }
}