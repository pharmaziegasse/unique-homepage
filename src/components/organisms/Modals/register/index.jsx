//** Standard Frameworks */
import * as React from 'react'

//** Additional Frameworks */
//** Validation */
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as EmailValidator from 'email-validator';
//** Apollo */
import { graphql, compose } from 'react-apollo';
import { gql } from "apollo-boost";
//** oAuth */
import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

//** Icons */
import { FaFacebook } from 'react-icons/fa';

//** Components */
//** Atoms */
import Checkbox from '../../../atoms/Checkbox';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';
import FlagIcon from '../../../atoms/FlagIcon';
import Alert from '../../../atoms/Alert';

//** Helpers */
//** Personalization */
import Text from "../../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

//** Mutation: Create User */
const CREATE_USER_MUTATION = gql`
    mutation register($token: String!, $values: GenericScalar!) {
        registrationRegistrationformPage(token: $token, url: "/registration", values: $values) {
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
            ... on RegistrationRegistrationformPage{
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
           surnamelive: "",
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
        //** Set prename localStorgae */
        localStorage.setItem('f_n', this.state.prename);
        localStorage.setItem('f_l', this.state.surname);
        localStorage.setItem('f_e', this.state.email);
        localStorage.setItem('f_p', this.state.phone);
        //** Set values that will be sent */
        let formvalues = {
            "title": "",
            "first_name": this.state.prename,
            "last_name": this.state.surname,
            "email": this.state.email,
            "telephone": this.state.phone,
            "address": this.state.address,
            "postal_code": this.state.postalcode,
            "city": this.state.city,
            "country": this.state.country,
            "verified": this.state.verified,
            "newsletter": this.state.newsletter
        };
        //** console.log(formvalues); */
        //** Check if the form values have been set (just to be sure) */
        if(formvalues !== null || formvalues !== undefined){
            //** Call graphQL mutation */
            await this.props.register({
                variables: {
                    "token": this.props.token,
                    "values": formvalues
                }
            })
            .then(({data}) => {
                //** Handle response (debug using console.log of data) */
                if(data.registrationRegistrationformPage.result === "OK"){
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
        if (this.state.prename === undefined || this.state.surname === undefined){
            buffer.push("Bitte geben Sie Ihren Namen ein.");
            error.push(4);
        } 
        if(this.state.phone === undefined || this.state.phone === false){
            buffer.push("Bitte geben Sie eine Telefonnummer ein.");
            error.push(1);
        }
        if(this.state.email === undefined){
            buffer.push("Bitte geben Sie eine E-Mail Adresse ein.");
            error.push(3);
        }
        if (this.state.email === false){
            buffer.push("Die eingegebene E-Mail Adresse ist ungültig.");
            error.push(3);
        }
        if (this.state.prename === false || this.state.surname === false){
            buffer.push("Ihr Name darf keine Sonderzeichen enthalten.");
            error.push(5);
        } 
        if (this.state.gdpr === false){
            buffer.push("Bitte beachten Sie die Datenschutzerklärung.");
            error.push(6);
        }
        if(error !== undefined && error.length > 0){
            //** Write buffer, show error alert and hide success alert */
            this.setState({buffer:buffer});
            this.setState({showError: true});
            this.setState({showSuccess: false});
        }else{
            //** If no errors -> Send the data using a graphQL mutation */
            // Facebook Pixel
            let data = {
                name: this.state.prename + " " + this.state.surname,
                email: this.state.email,
                phone: this.state.phone
            }
            this.props.pixel.track( 'CompleteRegistration', data );
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
                this.setState({phone:phoneNumber.number});
                // Set country
                if(phoneNumber.country !== undefined){
                    const { getName } = require('country-list');
                    this.setState({
                        country: getName(phoneNumber.country),
                        cc: phoneNumber.country.toLowerCase()
                    })
                }
            }else{
                this.setState({country:false, cc:false})
                this.setState({phone:value.trim()})
            }
        } else {
            this.setState({country:false, cc:false})
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
        if(value.trim() !== ""){
            this.setState({[field]:value})
        } else {
            this.setState({[field]:undefined})
        }
    }

    //** Update flag icon in phone input */
    printFlag = () => {
        if(this.state.cc !== false){
            return <FlagIcon code={this.state.cc} />
        }
    }

    printErrorDialogs = () => {
        if(Array.isArray(this.state.buffer)){
            let errors = [];
            let buffer = this.state.buffer;
            Object.keys(buffer).forEach(function (element, index) {
                errors.push(<p key={index}>{buffer[index]}</p>);
            });
            return errors;
        } else {
            return <p>{this.state.buffer}</p>
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
                        {
                            this.printErrorDialogs()
                        }
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
        
        //** Text data for the modal */ 
        if(this.props.data.pages[1] !== undefined){
            let modaldata = (this.props.data.pages[1]);
            //console.log(modaldata);

            return(
                <div className="modal fade" id="registration" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
                
                <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                    <div className="modal-content">
                    
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="dark-text">×</span>
                        </button>
                        <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ modaldata.registrationHead }/>))}}></div>
                        <hr/>
                        {this.state.showSuccess ? (
                            <div className="success">
                                <Alert className="alert-success" show="true">
                                    <i className="far fa-check-circle fa-3x green-text mt-1 mb-2"></i>
                                    <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ modaldata.thankYouText }/>))}}></div>
                                </Alert>
                            </div>
                        ) : (
                            <div className="register-form">
                            <div className="row">
                                <div className="col-md-7">
                                {!this.state.oAuthed ? (
                                    <div class="d-none">
                                        <div className="oAuth">
                                            {
                                                //** Facebook oAuth has been disabled for now */
                                                /*<FacebookLogin
                                                    appId="438514240304319"
                                                    autoLoad={false}
                                                    icon={<FaFacebook/>}
                                                    cssClass="btn-facebook kep-login-facebook kep-login-facebook-medium"
                                                    fields="first_name,last_name,email,picture"
                                                    textButton="Weiter mit Facebook"
                                                    callback={this.responseFacebook}
                                                />*/
                                            }
                                            {
                                                //** Google oAuth has been disabled for now */
                                                /*<GoogleLogin
                                                    clientId="762647868786-a6do4s713inonqo663lbgqqgo40u5sen.apps.googleusercontent.com"
                                                    buttonText="Weiter mit Google"
                                                    className="btn-google"
                                                    onSuccess={this.responseGoogle}
                                                    onFailure={this.responseGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />*/
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
                                        <div>
                                            <div className="input-grp">
                                                <i className="far fa-user-circle"></i>
                                                <Input className="my-3" type="text" name="prename" placeholder="Vorname*" value={this.state.prenamelive} validation={this.state.valid3} onChange={this.handleChange.bind(this)}/>
                                            </div>
                                            <div className="input-grp">
                                                <i className="far fa-user-circle"></i>
                                                <Input className="my-3" type="text" name="surname" placeholder="Nachname*" value={this.state.surnamelive} validation={this.state.valid4} onChange={this.handleChange.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="input-grp">
                                            {this.printFlag()}
                                            <i className="fas fa-phone"></i>
                                            <Input className="my-3" type="text" name="phone" placeholder="Telefonnummer*" value={this.state.phonelive} validation={this.state.valid1} onChange={this.handleChange.bind(this)}/>
                                        </div>
                                        {!this.state.formHidden ? (
                                        <>
                                        <div>
                                            <div className="input-grp">
                                                <i className="far fa-envelope"></i>
                                                <Input className="my-3" type="email" name="email" placeholder="E-Mail Adresse*" value={this.state.emaillive} validation={this.state.valid2}  onChange={this.handleChange.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-grp">
                                                    <i className="fas fa-globe"></i>
                                                    <Input className="my-3" type="text" name="postalcode" placeholder="PLZ" value={this.state.postalcode} validation={this.state.valid5}  onChange={this.handleChange.bind(this)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="input-grp">
                                                    <i className="fas fa-city"></i>
                                                    <Input className="my-3" type="text" name="city" placeholder="Stadt" value={this.state.city} validation={this.state.valid6}  onChange={this.handleChange.bind(this)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="input-grp">
                                                    <i className="far fa-building"></i>
                                                    <Input className="mb-2" type="text" name="address" placeholder="Adresse" value={this.state.address} validation={this.state.valid7}  onChange={this.handleChange.bind(this)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-muted">* = Pflichtfeld</span>
                                        </>
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
                                        <div className="text-left mb-3">
                                        <Checkbox name="newsletter" className="my-4" onChange={this.handleChange.bind(this)}>
                                            <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ modaldata.registrationNewsletterText }/>))}}></div>
                                        </Checkbox>
                                        <Checkbox name="gdpr" validation={this.state.valid6} onChange={this.handleChange.bind(this)}>
                                            <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ modaldata.registrationPrivacyText }/>))}}></div>
                                        </Checkbox>
                                        </div>
                                        <input className="btn btn-outline-elegant font-weight-bold" type="submit" value="Kostenloses Beratungsgespräch anfordern" />
                                    </form>
                                </div>
                                <div className="col-md-5 text-left">
                                <Alert className="alert-info register-info" show="true">
                                    <i className="far fa-lightbulb fa-2x"></i>
                                    <div className="mt-2 dark-grey-text" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ modaldata.registrationInfoText }/>))}}></div>
                                </Alert>
                                </div>
                            </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            )
        } else {
            return false;
        }
        
    }

    render(){
        console.log(this.state);
        if(this.props.data.pages !== undefined){
            return this.renderContent();
        } else {
            return false;
        }
    }
}

export default compose(
    graphql(CREATE_USER_MUTATION, {
        name: 'register'
    }),
    graphql(GET_MODAL_DATA, {
        options: (props) => ({ variables: { "token": props.token } })
    })
)(Modal);
