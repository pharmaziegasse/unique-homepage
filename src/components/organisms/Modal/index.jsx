import * as React from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as EmailValidator from 'email-validator';
// Apollo
import { gql } from "apollo-boost";
import { Mutation, ApolloConsumer } from 'react-apollo';

import Checkbox from '../../atoms/Checkbox'
import Input from '../../atoms/Input'
import FlagIcon from '../../atoms/FlagIcon'
import Alert from '../../atoms/Alert'

class Modal extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           phone: undefined,
           email: undefined,
           prename: undefined,
           surname: undefined,
           country: false,
           gdpr: false,
           newsletter: false,
           showError: false,
           showSuccess: false
        }
    }
    
    sendData = () => {
        // {"values": {"firstname": "carlos", "lastname": "carlos", "newsletter": true, "phone": "06508248811","email": "cisco@cis.co"}}
        let values = {
            "values": {"firstname": this.state.prename, "lastname": this.state.surname, "newsletter": this.state.newsletter, "phone": this.state.phone, "email": this.state.email}
        };
        console.log(values);

        const ADD_USER = gql`
            mutation user($values: GenericScalar!) {
                homeFormPage(url: "/user", values: $values) {
                    result
                    errors {
                    name
                    errors
                    }
                }
            }
        `;

        return (
            <ApolloConsumer>
            {client => (
                <Mutation
                    mutation={ADD_USER}
                    onCompleted={({ login }) => {
                        this.setState({showError: false});
                        this.setState({showSuccess: true});
                    }}
                >
                    {(homeFormPage, { values }) => values}
                </Mutation>
            )}
            </ApolloConsumer>
        );
    }

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
            console.warn(buffer);
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
            return(
                <Alert className="alert-danger" show="true">
                    {this.state.buffer.map((msg, i) => {      
                        return <p key={i}>{msg}</p>
                    })}
                </Alert>
            );
        } else {
            return false;
        }
    }

    printSuccess = () => {
        if(this.state.showSuccess){
            return(
                <Alert className="alert-success" show="true">
                    Registrierung erfolgreich!
                </Alert>
            );
        } else {
            return false;
        }
    }

    render(){
        return(
            <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
            <div className="modal-dialog modal-notify modal-info" role="document">
                <div className="modal-content">
                
                <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="dark-text">×</span>
                    </button>
                    <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: this.props.data.lead}}></div>
                    <hr/>
                    
                    <div className="register-form">
                        <p className="text-center">OAuth to be added</p>
                        <div className="w-100">
                            <div className="splitter my-4"><span className="or"><span className="or-text">oder</span></span></div>
                        </div>

                        {this.printError()}
                        {this.printSuccess()}
                        
                        <form id="form-reg" onSubmit={(e) => {this.handleSubmitForm(e); e.preventDefault();}}>
                            <div className="input-grp">
                                {this.printFlag()}
                                <i className="fas fa-phone"></i>
                                <Input className="my-3" type="text" name="phone" placeholder="Telefonnummer" validation={this.state.valid1} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="input-grp">
                                <i className="far fa-envelope"></i>
                                <Input className="my-3" type="email" name="email" placeholder="E-Mail Adresse (optional)" validation={this.state.valid2}  onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="input-grp">
                                <i className="far fa-user-circle"></i>
                                <Input className="my-3" type="text" name="prename" placeholder="Vorname" validation={this.state.valid3} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="input-grp">
                                <i className="far fa-user-circle"></i>
                                <Input className="my-3" type="text" name="surname" placeholder="Nachname" validation={this.state.valid4} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="text-left">
                            <Checkbox name="newsletter" className="my-4" onChange={this.handleChange.bind(this)}>Halten Sie mich auf dem Laufenden (Newsletter)</Checkbox>
                            <Checkbox name="gdpr" validation={this.state.valid6} onChange={this.handleChange.bind(this)}>Ich habe die <a href="/privacy">Datenschutzerklärung</a> gelesen und bin daher damit einverstanden, dass die eingegebenen Daten für den Zweck der Kontaktaufnahme elektronisch gespeichert werden.</Checkbox>
                            </div>
                            <div className="text-center mt-4" dangerouslySetInnerHTML={{__html: this.props.data.step1}}></div>
                            <input className="btn btn-outline-elegant" type="submit" value="Starten" />
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Modal
