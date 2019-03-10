import * as React from 'react'

import Btn from "../../atoms/Button"

type Props = {
    data: string
}

const Modal = (props: Props): React.Element<*> => {
    const { data } = props;

    return (
        <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="Registrieren" aria-hidden="true" data-backdrop="true">
        <div className="modal-dialog modal-notify modal-info" role="document">
            <div className="modal-content">
            
            <div className="modal-header">
                <p className="heading lead">{data.title}
                </p>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="white-text">×</span>
                </button>
            </div>

           
            <div className="modal-body">
                <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: data.lead}}></div>
                <hr/>
                
                <div className="register-form">
                    <p className="text-center">OAuth to be added</p>
                    <div className="w-100">
                        <div className="splitter my-4"><span className="or"><span className="or-text">oder</span></span></div>
                    </div>
                    <input className="form-control my-3" type="text" name="phone" placeholder="Telefonnummer"/>
                    <input className="form-control my-3" type="text" name="prename" placeholder="Vorname"/>
                    <input className="form-control my-3" type="text" name="surname" placeholder="Nachname"/>
                </div>


                <div className="text-center mt-4" dangerouslySetInnerHTML={{__html: data.step1}}></div>
                <Btn btnstyle="oELEGANT" className="mt-0 font-weight-bold">Starten</Btn>

                 <hr/>

                 <div dangerouslySetInnerHTML={{__html: data.newsletter}}></div>
                <div className="newsletter-form">
                    <input className="form-control my-3" type="text" name="email" placeholder="E-Mail Adresse"/>
                </div>
            </div>

            
            <div className="modal-footer justify-content-center">
                <a type="button" className="btn btn-primary waves-effect waves-light">Send
                <i className="fa fa-paper-plane ml-1"></i>
                </a>
                <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Modal
