//** Standard Frameworks */
import * as React from 'react'

/**
 * General WhatsAppButton Element
 */
class WhatsAppButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           visible: false
        }
    }

    render() {
        /** Remove potential + from phone number */
        let phone_wo_sign = this.props.num.replace('+','');
        /** Remove potential ( from phone number */
        let phone_wo_bracket_1 = phone_wo_sign.replace('(','');
        /** Remove potential ) from phone number */
        let phone_wo_bracket_2 = phone_wo_bracket_1.replace(')','');
        /** Remove potential spaces from phone number */
        let phone_wo_spaces = phone_wo_bracket_2.replace(' ','');
        
        /** Create link with url encoded text */
        let link = "https://api.whatsapp.com/send?phone="+phone_wo_spaces+"&text="+encodeURIComponent(this.props.text);
        
        return (
            <a
                className="btn btn-success btn-rounded font-weight-bold mt-3"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp pr-2"></i>
                WhatsApp me!
            </a>
        )
    }
    
}

export default WhatsAppButton
