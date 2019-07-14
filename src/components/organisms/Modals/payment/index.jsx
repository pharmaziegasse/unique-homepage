//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** Stripe */
//import { StripeProvider, Elements} from 'react-stripe-elements';

import CheckoutForm from './form';

class PaymentModal extends React.Component{
    render() {
        let modalID = "paymentModal"+this.props.index;
        return (
            <div className="modal fade" id={modalID} tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
                
                <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                    <div className="modal-content">
                    
                        <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="dark-text">×</span>
                        </button>
                        {/*
                        <StripeProvider apiKey="pk_test_3mHrqGgjRYHEbeOGUksNpMok008NqIIkRF">
                            <Elements>
                        */}
                                <CheckoutForm amount={this.props.amount} />
                        {/*
                            </Elements>
                        </StripeProvider>
                         */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentModal;
