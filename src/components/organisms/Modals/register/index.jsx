//** Standard Frameworks */
import * as React from 'react'

//** Additional Frameworks */
//** Validation */
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as EmailValidator from 'email-validator';
//** Apollo */
import { graphql, Query } from 'react-apollo';
import { gql } from "apollo-boost";
//** oAuth */
import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

//** Icons */
import { FaFacebook } from 'react-icons/fa';

//** Components */
//** Atoms */
import Checkbox from '../../../atoms/Checkbox'
import Input from '../../../atoms/Input'
import Button from '../../../atoms/Button'
import FlagIcon from '../../../atoms/FlagIcon'
import Alert from '../../../atoms/Alert'

//** Mutation: Create User */
const CREATE_USER_MUTATION = gql`
    mutation user($values: GenericScalar!) {
        homeFormPage(url: "/registrieren", values: $values) {
            result
            errors {
                name
                errors
            }
        }
    }
`;

//** Mutation: Get Data for Modal */
const GET_MODAL_DATA = gql`
    query modal(
        $token: String!
    ){
        pages(
            token: $token
        ){
            ... on RegistrationFormPage{
            registrationHead
            registrationInfoText
            registrationNewsletterText
            registrationPrivacyText
            registrationStepText
            thankYouText
            registrationButton{
                buttonTitle
                buttonPage{
                    id
                    urlPath
                }
            }
            }
        }
    }
`;

class Modal extends React.Component{
    constructor(props){
        super(props);

        //** oAuthed = If user is already logged in with Facebook or Google */
        //**  Difference between phone and phonelive (maps to everything else too): */
        //**  Phone is the final state, which is set by the validation-function. Phonelive is the current value of the input field. */
        //** picture is set when provided by Facebook oAuth */
        //** country is gathered from phone number and is required for the flag to show */
        //** verified = If user has proceeded using Facebook oAuth (not that likely to be a bot) */
        //** formHidden = When user proceeds with Facebook oAuth, most data is already known. The name + email form is hidden */
        //** showError / showSuccess = Displays the corresponding messages */

        this.state = {
           phone: undefined,
           email: undefined,
           prename: undefined,
           surname: undefined,
           country: false,
           picture: undefined,
           gdpr: false,
           newsletter: false,
           showError: false,
           verified: false,
           showSuccess: false,
           oAuthed: false,
           formHidden: false,
           phonelive: "",
           emaillive: "",
           prenamelive: "",
           surnamelive: ""
        }
    }

    //** oAuth response */
    responseFacebook = (response) => {
        if(response.first_name !== undefined && response.first_name !== null){
            this.setState({prenamelive: response.first_name});
        }
        if(response.last_name !== undefined && response.last_name !== null){
            this.setState({surnamelive: response.last_name});
        }
        if(response.email !== undefined && response.email !== null){
            this.setState({emaillive: response.email});
        }
        if(response.picture !== undefined && response.picture !== null){
            this.setState({picture: response.picture.data.url});
        }
        if(response.accessToken !== undefined && response.accessToken !== null){
            this.setState({verified: true});
        }

        this.validateInput();
        this.oAuthSuccess();
    }

    //** Google oAuth has been deactivated for now */
    /*responseGoogle = (response) => {
        console.log(response);
    }*/

    //** oAuth function */
    oAuthSuccess = () => {
        //** Hide oAuth buttons
        this.setState({oAuthed: true});
        this.setState({formHidden: true});
    }

    //** Send form data - create user with user mutation */
    sendData = async () => {
        //** Set values that will be sent */
        let formvalues = {
            "firstname": this.state.prename, "lastname": this.state.surname, "newsletter": this.state.newsletter, "phone": this.state.phone, "email": this.state.email, "verified": this.state.verified, "picture": this.state.picture
        };
        //** console.log(formvalues); */
        //** Check if the form values have been set (just to be sure) */
        if(formvalues !== null || formvalues !== undefined){
            //** Call graphQL mutation */
            await this.props.user({
                variables: {
                    values: formvalues
                }
            })
            .then(({data}) => {
                //** Handle response (debug using console.log of data) */
                //console.log(data);
                if(data.homeFormPage.result === "OK"){
                    //** Hide error and show success message */
                    this.setState({showError: false});
                    this.setState({showSuccess: true});
                } else {
                    //** Show error message and hide success message */
                    this.setState({buffer: "Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte überprüfen Sie Ihre Eingaben."})
                    this.setState({showError: true});
                    this.setState({showSuccess: false});
                }
            })
            .catch(error => {
                this.setState({buffer: "Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es etwas später erneut."})
                this.setState({showError: true});
                this.setState({showSuccess: false});
                console.error("Mutation error:");
                console.log(error);
            })
        } else {
            this.setState({buffer: "Ihre Eingaben entspricht nicht den Vorraussetzungen. Bitte überprüfen Sie Ihre Eingaben."})
            this.setState({showError: true});
            this.setState({showSuccess: false});
        }
    };

    validateInput = () => {
        this.checkTel(this.state.phonelive);
        this.checkEmail(this.state.emaillive);
        this.checkName("surname",this.state.surnamelive);
        this.checkName("prename",this.state.prenamelive);
    }

    //** Handle the submit of the modal form */
    handleSubmitForm = (event) => {
        event.preventDefault();
        let error = [];
        let buffer = [];
        
        //** Check inputs and generate errors */
        //** Errors are written to a buffer which is then written to this.state.buffer */
        if(this.state.phone === undefined){
            buffer.push("Bitte geben Sie eine Telefonnummer ein.");
            error.push(1);
        } else {
            if(this.state.phone === false){
                buffer.push("Bitte geben Sie Ihre Landes-Vorwahl an. (z.B. +43)");
                error.push(2);
            }
        }
        if (this.state.email === false){
            buffer.push("Die eingegebene E-Mail Adresse ist ungültig.");
            error.push(3);
        }
        if (this.state.prename === undefined || this.state.surname === undefined){
            buffer.push("Bitte geben Sie Ihren Namen ein.");
            error.push(4);
        } 
        if (this.state.prename === false || this.state.surname === false){
            buffer.push("Ihr Name darf keine Sonderzeichen enthalten.");
            error.push(5);
        } 
        if (this.state.gdpr === false){
            buffer.push("Bitte beachten Sie die Datenschutzerklärung.");
            error.push(6);
        }
        if(error !== 'undefined' && error.length > 0){
            //** Write buffer, show error alert and hide success alert */
            this.setState({buffer:buffer});
            this.setState({showError: true});
            this.setState({showSuccess: false});
        }else{
            //** If no errors -> Send the data using a graphQL mutation */
            this.sendData();
        };
    }

    //** Update states with latest input field data + verify inputs */
    handleChange = (field, value) => {
        //** Update live states and check validity in callback */
        switch (field) {
            case 'phone':
                this.setState({phonelive:value}, this.checkTel(value))
                break;
            case 'email':
                this.setState({emaillive:value}, this.checkEmail(value))
                break;
            case 'prename':
                this.setState({prenamelive:value},this.checkName("prename",value))
                break;
            case 'surname':
                this.setState({surnamelive:value},this.checkName("surname",value))
                break;
            case 'newsletter':
                this.setState({newsletter:value})
                break;
            case 'gdpr':
                this.setState({gdpr:value})
                break;
            default:
                this.setState({[field]:value})
        }
    }

    //** Check if phone number is valid */
    checkTel = (value) => {
        if(value !== ''){
            const phoneNumber = parsePhoneNumberFromString(value);
            if(phoneNumber !== undefined){
                phoneNumber.formatInternational();
                if(phoneNumber.country !== undefined){
                    this.setState({phone:phoneNumber.number})
                    this.setState({country:phoneNumber.country.toLowerCase()})
                }else{
                    this.setState({country:false})
                    this.setState({phone:false})
                }
                
            }else{
                this.setState({country:false})
                this.setState({phone:false})
            }
        } else {
            this.setState({country:false})
            this.setState({phone:undefined})
        }
    }

    //** Check if E-Mail is valid */
    checkEmail = (value) => {
        if(value !== ''){
            if(EmailValidator.validate(value)){
                this.setState({email:value})
            } else {
                this.setState({email:false})
            }
        } else {
            this.setState({email:undefined})
        }
    }

    //** Check if name contains special chars */
    checkName = (field,value) => {
        let format = /[ !@#$%^&*()_+\-=\]{};':"\\|,.<>?]/;
        if(format.test(value) === false){
            if(value !== ""){
                this.setState({[field]:value})
            } else {
                this.setState({[field]:undefined})
            }
        }else{
            this.setState({[field]:false})
        }
    }

    //** Update flag icon in phone input */
    printFlag = () => {
        if(this.state.country !== false){
            return <FlagIcon code={this.state.country} />
        }
    }

    //** Print error Alert component */
    printError = () => {
        //** There have been issues, where printError() was called, but this.state.showError and this.state.buffer was false -> leading to crash */
        if(this.state.showError){
            //** Check if message (buffer) is written. */
            if(this.state.buffer !== null || this.state.buffer !== undefined){
                return(
                    <Alert className="alert-danger" show="true">
                        {this.state.buffer.map((msg, i) => {      
                            return <p key={i}>{msg}</p>
                        })}
                    </Alert>
                );
            } else {
                return(
                    <Alert className="alert-danger" show="true">
                        Unknown error.
                    </Alert>
                );
            }
            
        } else {
            return false;
        }
    }

    //** Show formular for edit */ 
    editForm = () => {
        this.setState({formHidden: false});
    }

    renderContent (){
        return(
            <Query
                query={GET_MODAL_DATA}
                variables={{ "token": this.props.token }}
            >
            {({ loading, error, data }) => {
                
                console.warn(error);
                console.log(data);

                let modaldata = data.page;
                /*return(
                <div>
                    <div className="modal fade" id="registrieren" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
                    
                    <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                        <div className="modal-content">
                        
                        <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="dark-text">×</span>
                            </button>
                            <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: modaldata.registrationHead}}></div>
                            <hr/>
                            {this.state.showSuccess ? (
                                <div className="success">
                                    <Alert className="alert-success" show="true">
                                        <div dangerouslySetInnerHTML={{__html: modaldata.thankYouText}}></div>
                                    </Alert>
                                </div>
                            ) : (
                                <div className="register-form">
                                <div className="row">
                                    <div className="col-md-7">
                                    {!this.state.oAuthed ? (
                                        <div>
                                            <div className="oAuth">
                                            <FacebookLogin
                                                    appId="438514240304319"
                                                    autoLoad={false}
                                                    icon={<FaFacebook/>}
                                                    cssClass="btn-facebook kep-login-facebook kep-login-facebook-medium"
                                                    fields="first_name,last_name,email,picture"
                                                    textButton="Weiter mit Facebook"
                                                    callback={this.responseFacebook}
                                                />
                                            
                                                {
                                                    //** Google oAuth has been disabled for now */

                                                    /*<GoogleLogin
                                                        clientId="762647868786-a6do4s713inonqo663lbgqqgo40u5sen.apps.googleusercontent.com"
                                                        buttonText="Weiter mit Google"
                                                        className="btn-google"
                                                        onSuccess={this.responseGoogle}
                                                        onFailure={this.responseGoogle}
                                                        cookiePolicy={'single_host_origin'}
                                                    />
                                                }
                                            </div>
                                            <div className="w-100">
                                                <div className="splitter my-4"><span className="or"><span className="or-text">oder</span></span></div>
                                            </div>
                                        </div>
                                    ):(
                                        <div className="alert alert-success mb-4">
                                            <h4 className="font-weight-bold">Hallo {this.state.prename}!</h4><p>Wir benötigen jetzt nur noch Deine Telefonnummer.</p>
                                        </div>
                                    )}
                                        {this.printError()}
                                    
                                        <form id="form-reg" onSubmit={(e) => {this.handleSubmitForm(e); e.preventDefault();}}>
                                            <div className="input-grp">
                                                {this.printFlag()}
                                                <i className="fas fa-phone"></i>
                                                <Input className="my-3" type="text" name="phone" placeholder="Telefonnummer" value={this.state.phonelive} validation={this.state.valid1} onChange={this.handleChange.bind(this)}/>
                                            </div>
                                            {!this.state.formHidden ? (
                                            <div>
                                                <div className="input-grp">
                                                    <i className="far fa-envelope"></i>
                                                    <Input className="my-3" type="email" name="email" placeholder="E-Mail Adresse (optional)" value={this.state.emaillive} validation={this.state.valid2}  onChange={this.handleChange.bind(this)}/>
                                                </div>
                                                <div className="input-grp">
                                                    <i className="far fa-user-circle"></i>
                                                    <Input className="my-3" type="text" name="prename" placeholder="Vorname" value={this.state.prenamelive} validation={this.state.valid3} onChange={this.handleChange.bind(this)}/>
                                                </div>
                                                <div className="input-grp">
                                                    <i className="far fa-user-circle"></i>
                                                    <Input className="my-3" type="text" name="surname" placeholder="Nachname" value={this.state.surnamelive} validation={this.state.valid4} onChange={this.handleChange.bind(this)}/>
                                                </div>
                                            </div>
                                            ) : (
                                                <div className="alert alert-info register-info alert-data">
                                                    <p className="m-0">
                                                    <span className="font-weight-bold">Meine Daten</span><br/>
                                                    Name: {this.state.prename} {this.state.surname}<br/>
                                                    E-Mail: {this.state.email}<br/>
                                                    <Button btnstyle="oELEGANT" size="SM" onClick={this.editForm}>Ändern</Button>
                                                    </p>
                                                </div>
                                            )}
                                            <div className="text-left">
                                            <Checkbox name="newsletter" className="my-4" onChange={this.handleChange.bind(this)}><div dangerouslySetInnerHTML={{__html: modaldata.registrationNewsletterText}}></div></Checkbox>
                                            <Checkbox name="gdpr" validation={this.state.valid6} onChange={this.handleChange.bind(this)}><div dangerouslySetInnerHTML={{__html: modaldata.registrationPrivacyText}}></div></Checkbox>
                                            </div>
                                            <div className="text-center mt-4" dangerouslySetInnerHTML={{__html: this.props.data.step1}}></div>
                                            <input className="btn btn-outline-elegant font-weight-bold" type="submit" value="Starten" />
                                        </form>
                                    </div>
                                    <div className="col-md-5 text-left">
                                    <Alert className="alert-info register-info" show="true">
                                        <i className="far fa-lightbulb fa-2x"></i>
                                        <div className="mt-2 dark-grey-text" dangerouslySetInnerHTML={{__html: modaldata.registrationInfoText}}></div>
                                    </Alert>
                                    </div>
                                </div>
                                </div>
                            
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                )*/
                return(
                    <div>Nonono</div>
                )
                
            }}
        </Query>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default graphql(CREATE_USER_MUTATION, {
    name: 'user'
})(Modal);
