import React, { Component } from 'react';

import Burger from 'components/Burger/Burger';

import AuxComp from 'hoc/AuxComp';

class BurgerBuilder extends Component {

    render() {
        return (
            <AuxComp>
                <Burger />
                <div>Build Controls</div>
            </AuxComp>
        );
    }

}

export default BurgerBuilder;