//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** PayPal */
import { PayPalButton } from "react-paypal-button-v2";

//** Components */
import Alert from "../../../atoms/Alert";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            payment: { success:false, name:"" },
            texts: { head: "Nur noch einen Schritt entfernt!", sub: "Zahlungsart wählen" }
        }

        this.renderContent = this.renderContent.bind(this);
    }

    renderContent = () => {
        return(
            <div>
                <h2>{this.state.texts.head}</h2>
                <p className="lead mt-3 mb-2">{this.state.texts.sub}</p>
                <div className="row d-flex justify-content-center">
                    {this.state.payment.success === false ? (
                        <div className="col-lg-8">
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
                                //** Capture the funds from the transaction */
                                return actions.order.capture().then(details => {
                                    //** Save name of customer, if provided */
                                    if(details.payer !== undefined){
                                        if(details.payer.name !== undefined){
                                            if(details.payer.name.given_name !== undefined){
                                                this.setState(prevState => ({
                                                    payment: {
                                                        ...prevState.payment,
                                                        name: details.payer.name.given_name
                                                    },
                                                }));
                                            }
                                        }
                                    }

                                    //** If payment was a success */
                                    if(details.status === "COMPLETED"){
                                        this.setState(prevState => ({
                                            payment: {
                                                ...prevState.payment,
                                                success: true
                                            },
                                            texts: {
                                                ...prevState.texts,
                                                head: "",
                                                sub: "Herzlichen Glückwunsch zu Ihrem individuellen Beautyprogramm!"
                                            }
                                        }));
                                    } else {
                                        console.error("There was an error during the payment procedure.");
                                    }

                                    console.log(details);
                                });
                                }}
                            />
                        </div>
                    ) : (
                        <Alert show="true" className="alert-success">
                            {this.state.payment.name !== "" &&
                                <p className="lead font-weight-bold">Vielen Dank für Ihre Bestellung, {this.state.payment.name}!</p>
                            }
                            <p>Wir melden uns bei Ihnen!</p>
                        </Alert>
                    )}
                </div>
            </div>
        );
    }

    render(){
        return this.renderContent();
    }
}

//export default injectStripe(Form);
export default Form;
