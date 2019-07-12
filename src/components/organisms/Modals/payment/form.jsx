//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** Stripe */
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class Form extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }
    renderContent (){
        return(
            <h1>Form</h1>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default injectStripe(Form);
