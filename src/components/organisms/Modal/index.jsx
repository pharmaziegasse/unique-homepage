import * as React from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as EmailValidator from 'email-validator';
// Apollo
import { graphql, compose } from 'react-apollo';
import { gql } from "apollo-boost";
// oAuth 
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// Icons
import { FaFacebook } from 'react-icons/fa';


import Checkbox from '../../atoms/Checkbox'
import Input from '../../atoms/Input'
import FlagIcon from '../../atoms/FlagIcon'
import Alert from '../../atoms/Alert'

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

const GET_MODAL_DATA = gql`
    query modal($id: Int!){
        page(id: $id){
            ... on HomeFormPage{
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
        console.log("Props");
        console.log(this.props);

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
           showSuccess: false
        }
    }

    // oAuth response
    responseFacebook = (response) => {
        console.log(response);
        if(response.first_name !== undefined && response.first_name !== null){
            this.setState({prename: response.first_name});
        }
        if(response.last_name !== undefined && response.last_name !== null){
            this.setState({surname: response.last_name});
        }
        if(response.email !== undefined && response.email !== null){
            this.setState({email: response.email});
        }
        if(response.picture !== undefined && response.picture !== null){
            this.setState({picture: response.picture.data.url});
        }
        if(response.accessToken !== undefined && response.accessToken !== null){
            this.setState({verified: true});
        }
        console.log(this.state);
    }
    responseGoogle = (response) => {
        console.log(response);
    }
    // oAuth function
    setForm = () => {
        // Hide oAuth buttons
    }

    // Send form data - create user with user mutation
    sendData = async () => {
        let formvalues = {
            "firstname": this.state.prename, "lastname": this.state.surname, "newsletter": this.state.newsletter, "phone": this.state.phone, "email": this.state.email, "verified": this.state.verified, "picture": this.state.picture
        };
        console.log(formvalues);
        if(formvalues !== null || formvalues !== undefined){
            await this.props.user({
                variables: {
                    values: formvalues
                }
            })
            .then(({data}) => {
                if(data.homeFormPage.result === "OK"){
                    this.setState({showError: false});
                    this.setState({showSuccess: true});
                } else {
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

    handleSubmitForm = (event) => {
        event.preventDefault();
        let error = [];
        let buffer = [];
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
            this.setState({buffer:buffer});
            this.setState({showError: true});
            this.setState({showSuccess: false});
        }else{
            this.sendData();
        };
    }

    handleChange = (field, value) => {
        switch (field) {
            case 'phone':
                this.checkTel(value);
                break;
            case 'email':
                this.checkEmail(value);
                break;
            case 'prename':
                this.checkName(field,value);
                break;
            case 'surname':
                this.checkName(field,value);
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

    printFlag = () => {
        if(this.state.country !== false){
            return <FlagIcon code={this.state.country} />
        }
    }

    printError = () => {
        if(this.state.showError){
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


    strip_html_tags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }

    renderContent (){
        let modaldata = (this.props.data.page);
        const success = this.state.showSuccess;
        return(
            <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
            
            <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                <div className="modal-content">
                
                <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="dark-text">×</span>
                    </button>
                    <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: modaldata.registrationHead}}></div>
                    <hr/>
                    {success ? (
                        <div className="success">
                            <Alert className="alert-success" show="true">
                                <div dangerouslySetInnerHTML={{__html: modaldata.thankYouText}}></div>
                            </Alert>
                        </div>
                    ) : (
                        <div className="register-form">
                        <div className="row">
                            <div className="col-md-7">
                                <p className="text-center d-none">OAuth to be added</p>
                                <div className="oAuth">
                                    <FacebookLogin
                                        appId="438514240304319"
                                        autoLoad={true}
                                        icon={<FaFacebook/>}
                                        cssClass="btn-facebook kep-login-facebook kep-login-facebook-medium"
                                        fields="first_name,last_name,email,picture"
                                        textButton="Weiter mit Facebook"
                                        callback={this.responseFacebook}
                                    />
                                    <GoogleLogin
                                        clientId="762647868786-a6do4s713inonqo663lbgqqgo40u5sen.apps.googleusercontent.com"
                                        buttonText="Weiter mit Google"
                                        className="btn-google"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                                <div className="w-100">
                                    <div className="splitter my-4"><span className="or"><span className="or-text">oder</span></span></div>
                                </div>

                                {this.printError()}
                            
                                <form id="form-reg" onSubmit={(e) => {this.handleSubmitForm(e); e.preventDefault();}}>
                                    <div className="input-grp">
                                        {this.printFlag()}
                                        <i className="fas fa-phone"></i>
                                        <Input className="my-3" type="text" name="phone" placeholder="Telefonnummer" /*value={this.state.phone}*/ validation={this.state.valid1} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="input-grp">
                                        <i className="far fa-envelope"></i>
                                        <Input className="my-3" type="email" name="email" placeholder="E-Mail Adresse (optional)" /*value={this.state.email}*/ validation={this.state.valid2}  onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="input-grp">
                                        <i className="far fa-user-circle"></i>
                                        <Input className="my-3" type="text" name="prename" placeholder="Vorname" /*value={this.state.prename}*/ validation={this.state.valid3} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="input-grp">
                                        <i className="far fa-user-circle"></i>
                                        <Input className="my-3" type="text" name="surname" placeholder="Nachname" /*value={this.state.surname}*/ validation={this.state.valid4} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="text-left">
                                    <Checkbox name="newsletter" className="my-4" onChange={this.handleChange.bind(this)}><div dangerouslySetInnerHTML={{__html: modaldata.registrationNewsletterText}}></div></Checkbox>
                                    <Checkbox name="gdpr" validation={this.state.valid6} onChange={this.handleChange.bind(this)}><div dangerouslySetInnerHTML={{__html: modaldata.registrationPrivacyText}}></div></Checkbox>
                                    </div>
                                    <div className="text-center mt-4" dangerouslySetInnerHTML={{__html: this.props.data.step1}}></div>
                                    <input className="btn btn-outline-elegant" type="submit" value="Starten" />
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
        )
    }

    render(){
        if(this.props.data.page !== undefined){
            return this.renderContent();
        } else {
            return false;
        }
    }
}

export default compose(
    graphql(CREATE_USER_MUTATION, {
        name: 'user'
    }),
    graphql(GET_MODAL_DATA, {
        options: (props) => ({ variables: { id: 4 } })
    }),
    /*graphql(GET_MODAL_DATA, {
        name: 'modal'
    }),*/
)(Modal);
