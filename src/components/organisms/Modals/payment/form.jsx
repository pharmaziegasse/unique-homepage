//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** Stripe */
import { CardElement, IbanElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

interface IFormProps extends ReactStripeElements.InjectedStripeProps {  }

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

    handleIBANSubmit = async (e) => {
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
    };


    onChangeEvent = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }



    renderContent (){
        return(
            <div>
                <h2>Beautyprogamm starten</h2>
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
            </div>
        );
    }

    render(){
        return this.renderContent();
    }
}

export default injectStripe(Form);
