import React, { Component } from 'react';

import Burger from 'components/Burger/Burger';

import AuxComp from 'hoc/AuxComp';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <AuxComp>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </AuxComp>
        );
    }

}

export default BurgerBuilder;