import React, {Component} from 'react';
import AuxComp from 'hoc/AuxComp/AuxComp';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    
    render() {
        return (
            <AuxComp>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    clickedMenuButton={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </AuxComp>
        );
    }
};

export default Layout;