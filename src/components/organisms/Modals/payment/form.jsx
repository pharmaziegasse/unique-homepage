//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** Stripe */
//import { CardElement, IbanElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
//** PayPal */
import { PayPalButton } from "react-paypal-button-v2";

//interface IFormProps extends ReactStripeElements.InjectedStripeProps {  }

interface IFormState {
    name: string;
    amount: string;
    email: string;
 }

class Form extends React.Component<IFormProps, IFormState>{
    constructor(props){
        super(props);

        this.state = {
            payment_method: 0,
            name: "",
            iban: "",
            email: "",
            amount: "200"
        }
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            /** Check if Stripe is loaded */
            if (this.props.stripe) {
                // Create token
                let token = await this.props.stripe.createToken({
                    name: this.state.name
                })
                console.log(token);
            } else {
            console.log("Stripe.js hasn't loaded yet.");
            }
                     
        } catch(e) {
            throw e;
        }
    }

    /*handleIBANSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.stripe.createSource({
        type: 'sepa_debit',
        sepa_debit: {
            iban: this.state.iban,
        },
        currency: 'eur',
        owner: {
            name: this.state.name,
        },
        }).then((result) => {
            if (result.error) {
                console.error('Error in source creation:', result.error);
            } else {
                console.log(`Success! Source created: ${result.source.id}`);
                this.sendSourceToServer(result.source);
            }
        });
    };*/

    //** Write input to state */
    onChangeEvent = (e) => {
        //** Automatically get name and value */
        this.setState({[e.target.name]: e.target.value});
    }

    //** Select payment method */
    selectMethod = (e) => {
        let id = parseInt(e.target.getAttribute('data-id'),10);
        if(id !== undefined && (id === 0 || id === 1)){
            //** 0: Card, 1: SEPA */
            this.setState({payment_method: id});
        } else {
            console.error("Method not availible");
        }
       
    }

    renderContent (){
        return(
            <div>
                <h2>Nur noch einen Schritt entfernt!</h2>
                <p className="lead mt-3 mb-2">Zahlungsart wählen</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <PayPalButton
                            createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                amount: {
                                    value: this.props.amount
                                }
                                }]
                            });
                            }}
                            onApprove={(data, actions) => {
                            // Capture the funds from the transaction
                            return actions.order.capture().then(function(details) {
                                // Show a success message to your buyer
                                alert("Transaction completed by " + details.payer.name.given_name);
                    
                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID
                                })
                                });
                            });
                            }}
                        />
                    </div>
                </div>
                {/*
                <button className="btn btn-purple btn-rounded font-weight-bold" data-id="0" onClick={e => this.selectMethod(e)}><i className="far fa-credit-card pr-2"></i>Kreditkarte</button>
                <button className="btn btn-purple btn-rounded font-weight-bold" data-id="1" onClick={e => this.selectMethod(e)}>SEPA Lastschrift</button>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        {
                            this.state.payment_method === 0 ? (
                                <form
                                    className="form-group mt-3"
                                    onSubmit={e => this.handleSubmit(e)}
                                >
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={e => this.onChangeEvent(e)}
                                    />
                                    <label>CC Number -- Exp. Date -- CCV</label>
                                    <CardElement className="p-2 form-control" />
                                    <button className="btn btn-primary mt-3">Charge it!</button>
                                    
                                </form>
                            ) : (
                                <form
                                    className="form-group mt-3"
                                    onSubmit={e => this.handleIBANSubmit(e)}
                                >
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={e => this.onChangeEvent(e)}
                                    />
                                    <label>E-Mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={e => this.onChangeEvent(e)}
                                    />
                                    <label>IBAN</label>
                                    <IbanElement
                                        supportedCountries={['SEPA']}
                                        className="p-2 form-control"
                                    />
                                    <button className="btn btn-primary mt-3">Charge it!</button>
                                    
                                </form>
                            )
                        }
                    </div>
                </div>
                */}
            </div>
        );
    }

    render(){
        return this.renderContent();
    }
}

//export default injectStripe(Form);
export default Form;
