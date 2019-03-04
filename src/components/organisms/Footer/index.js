import * as React from 'react'

type Props = {
    sociallinks: string,
    companyinfo: string,
    logo: string
}

const Footer = (props: Props): React.Element<*> => {
    const { sociallinks, companyinfo, logo } = props;

    return (
        <footer className="page-footer font-small lighten-5 py-4 ">

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
          <p><i className="fas fa-envelope mr-3"></i>{companyinfo[0].email}</p>
        </div>


        <hr className="w-100 clearfix d-md-none"/>


        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <p><a href="/about">Impressum</a></p>
          <p><a href="/privacy">Datenschutz</a></p>
          <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href={sociallinks[0].fb} className="mx-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={sociallinks[0].ig} className="mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
           
        </div>


      </div>


      <hr/>

      <div className="row d-flex align-items-center dark-grey-text">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left">© 2018 - {(new Date().getFullYear())} Copyright: {companyinfo[0].copyrightholder}
          </p>

        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer