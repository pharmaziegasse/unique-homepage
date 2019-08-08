//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import WhatsAppButton from "../../atoms/WhatsAppButton"

//** Helpers */
//** Social Links */
import SocialLinks from "../../helper/SocialLinks";

//** Preconfigure datatypes */
type Props = {
    sociallinks: string,
    companyinfo: string,
    logo: string
}

/**
 * Footer Element
 */
const Footer = (props: Props): React.Element<*> => {

    const { background, sociallinks, companyinfo, logo } = props;

    //** Set style */
    let backgroundstyle = {
      backgroundColor: background
    }

    return (
        <footer className="page-footer font-small lighten-5 py-4 " style={backgroundstyle}>

    <div className="container text-center text-md-left">

      <div className="row text-center text-md-left mt-3 pb-3 dark-grey-text">

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <img className="img-fluid" src={logo} alt="The Unique Story"/>
        </div>

        <hr className="w-100 clearfix d-md-none"/>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Anschrift</h6>
          <p>{companyinfo[0].address}</p>
          <p>{companyinfo[0].zip} {companyinfo[0].city}</p>
        </div>

        <hr className="w-100 clearfix d-md-none"/>

        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
          <p><i className="fas fa-phone mr-3"></i>{companyinfo[0].phone}</p>
          <a className="email-link" href={"mailto:"+companyinfo[0].email}><i className="fas fa-envelope mr-3"></i>{companyinfo[0].email}</a>
          <WhatsAppButton text={props.wa_text} num={props.wa_num} />
        </div>

        <hr className="w-100 clearfix d-md-none"/>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <p><span className="link" data-toggle="modal" data-target="#aboutModal">Impressum</span></p>
          <p><span className="link" data-toggle="modal" data-target="#privacyModal">Datenschutz</span></p>
          <SocialLinks items={sociallinks} />
        </div>
      </div>
      <hr/>
      <div className="row d-flex align-items-center dark-grey-text mb-3">
        <div className="col-md-6">
          <p className="text-center text-md-left">© 2018 - {(new Date().getFullYear())} Copyright: {companyinfo[0].copyrightholder}
          </p>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer
