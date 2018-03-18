import React from 'react';
import AuxComp from 'hoc/AuxComp';

import classes from './Layout.css';

const layout = (props) => (
    <AuxComp>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </AuxComp>
);

export default layout;