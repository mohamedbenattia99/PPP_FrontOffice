import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Checkout Information</h1>
                    </div>
                    <div className="ps-section__content">
                        <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
