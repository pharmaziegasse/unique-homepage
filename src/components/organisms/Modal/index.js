import * as React from 'react'

type Props = {
    data: string
}


const Modal = (props: Props): React.Element<*> => {
    const { data } = props;

    let handleSubmit = function (event) {
        let formData = {phone:event.target[0].value,prename:event.target[1].value,surname:event.target[2].value};
        console.log(formData);
        return formData;
    }

    return(
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
                    <form id="form-reg" onSubmit={(e) => {handleSubmit(e); e.preventDefault();}}>
                        <div className="input-grp"><i class="fas fa-phone" data-toggle="tooltip" title="Um Sie zu kontaktieren, benötigen wir Ihre Telefonnummer"></i><input className="form-control my-3" type="text" name="phone" placeholder="Telefonnummer"/></div>
                        <div className="input-grp"><i class="far fa-user-circle" data-toggle="tooltip" title="Eine persönliche Kommunikation ist uns sehr wichtig."></i><input className="form-control my-3" type="text" name="prename" placeholder="Vorname"/></div>
                        <div className="input-grp"><i class="far fa-user-circle" data-toggle="tooltip" title="Eine persönliche Kommunikation ist uns sehr wichtig."></i><input className="form-control my-3" type="text" name="surname" placeholder="Nachname"/></div>
                        <div className="text-center mt-4" dangerouslySetInnerHTML={{__html: data.step1}}></div>
                        <input className="btn btn-outline-elegant" type="submit" value="Starten" />
                    </form>
                </div>
                
                

                <hr/>

                <div dangerouslySetInnerHTML={{__html: data.newsletter}}></div>
                <div className="newsletter-form">
                    <input className="form-control my-3" type="text" name="email" placeholder="E-Mail Adresse"/>
                </div>
            </div>

            
            <div className="modal-footer justify-content-center">
                <button className="btn btn-primary waves-effect waves-light">Send
                <i className="fa fa-paper-plane ml-1"></i>
                </button>
                <button className="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
        </div>
    )

}

export default Modal
