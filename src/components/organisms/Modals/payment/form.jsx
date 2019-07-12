//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
//** Stripe */
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

interface IFormProps extends ReactStripeElements.InjectedStripeProps {  }

interface IFormState {
    name: string;
    amount: string;
 }

class Form extends React.Component<IFormProps, IFormState>{
    constructor(props){
        super(props);
        
        this.state = {
           name: "",
           amount: "200"
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            let token = await this.props.stripe.createToken({
                name: this.state.name
            })
            console.log(token);
           
        } catch(e) {
            throw e;
        }
    }

    renderContent (){
        return(
            <div>
                <h1>Form</h1>
                <form
                    className="form-group mt-3 border-primary rounded shadow-lg"
                    onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => this.handleSubmit(e)}
                >
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}
                    />
                    <label>CC Number -- Exp. Date -- CCV</label>
                    <CardElement className="p-2 border border-dark" />
                    <button className="btn btn-primary border border-dark shadow mt-3">Charge it!</button>
                </form>
            </div>
        );
    }

    render(){
        return this.renderContent();
    }
}

export default injectStripe(Form);
