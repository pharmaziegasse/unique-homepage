import * as React from 'react'

import Checkbox from '../../atoms/Checkbox'
import Input from '../../atoms/Input'

class Modal extends React.Component{
    constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }
    handleSubmit = (event) => {
        let formData = {phone:event.target[0].value,prename:event.target[1].value,surname:event.target[2].value,gdpr:event.target[3].checked};
        if(formData.gdpr === true){
            console.log(formData);
        }else{
            console.warn("GDPR not checked");
        }
        return formData;
    }

    render(){
        return(
            <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
            <div className="modal-dialog modal-notify modal-info" role="document">
                <div className="modal-content">
                
                <div className="modal-header">
                    <p className="heading lead">{this.props.data.title}
                    </p>

                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="white-text">×</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: this.props.data.lead}}></div>
                    <hr/>
                    
                    <div className="register-form">
                        <p className="text-center">OAuth to be added</p>
                        <div className="w-100">
                            <div className="splitter my-4"><span className="or"><span className="or-text">oder</span></span></div>
                        </div>
                        <form id="form-reg" onSubmit={(e) => {this.handleSubmit(e); e.preventDefault();}}>
                            <div className="input-grp">
                                <i className="fas fa-phone"></i>
                                <Input className="my-3" type="text" name="phone" placeholder="Telefonnummer" />
                            </div>
                            <div className="input-grp">
                                <i className="far fa-envelope"></i>
                                <Input className="my-3" type="email" name="email" placeholder="E-Mail Adresse (optional)" />
                            </div>
                            <div className="input-grp">
                                <i className="far fa-user-circle"></i>
                                <Input className="my-3" type="text" name="prename" placeholder="Vorname" />
                            </div>
                            <div className="input-grp">
                                <i className="far fa-user-circle"></i>
                                <Input className="my-3" type="text" name="surname" placeholder="Nachname" />
                            </div>
                            <div className="text-left">
                            <Checkbox name="newsletter" className="my-4">Halten Sie mich auf dem Laufenden (Newsletter)</Checkbox>
                            <Checkbox name="gdpr">Ich habe die <a href="/privacy">Datenschutzerklärung</a> gelesen und bin daher damit einverstanden, dass die eingegebenen Daten für den Zweck der Kontaktaufnahme elektronisch gespeichert werden.</Checkbox>
                            </div>
                            <div className="text-center" dangerouslySetInnerHTML={{__html: this.props.data.step1}}></div>
                            <input className="btn btn-outline-elegant" type="submit" value="Starten" />
                        </form>
                    </div>
                    
                    <hr/>

                    <div dangerouslySetInnerHTML={{__html: this.props.data.newsletter}}></div>
                    <div className="newsletter-form">
                        <input className="form-control my-3" type="text" name="email" placeholder="E-Mail Adresse"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }

    

    
}

export default Modal
