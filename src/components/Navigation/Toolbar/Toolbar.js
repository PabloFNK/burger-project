import React from 'react';

import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from 'components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;