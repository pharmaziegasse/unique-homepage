import * as React from 'react'
import Cookies from 'js-cookie'

class CookieModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //Set state to show: false - Hidden
        this.setState(state => ({
            show: false
        }));
        //Set cookie 
        Cookies.set('AcceptCookie', '1'); 
    }

    getStatus() {
        let val = Cookies.get('AcceptCookie');
        if(val === '0'){
            return true;
        }else if(val === '1'){
            return false;
        }else{
            return true;
        } 
    }
    
    render() {
        if(this.getStatus()){
            if(this.state.show){
                return (
                    <div className="modal fade bottom show d-block" id="cookieModal" tabIndex="-1" role="dialog" aria-labelledby="cookieModalLabel" aria-hidden="true" area-backdrop="false">
                        <div className="modal-dialog modal-full-height modal-bottom" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <p>Wir verwenden Cookies, damit unsere Website optimal funktioniert. Mit der Nutzung dieser Website erklären Sie sich einverstanden, dass PHARMAZIEGASSE® Cookies einsetzt. <a href="/privacy">Mehr über Cookies</a></p>
                                    <button name="dismiss_cookie" className="btn btn-outline-elegant btn-rounded waves-effect" onClick={this.handleClick}><i className="fas fa-check pr-2"></i>Verstanden</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}

export default CookieModal;
