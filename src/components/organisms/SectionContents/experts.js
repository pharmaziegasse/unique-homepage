//** Standard Frameworks */
import * as React from 'react';

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton";
import Alert from "../../atoms/Alert";

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

/**
 * Section: Experts
 */
const SectionContent = (props: Props): React.Element<*> => {
    return (
        <div className="container text-left">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ props.heading }/>))}}></h2>
            }
            <div className="row mt-5">
            <div className="col-md-6">
                    <div className="row">
                        <div className="view col-12 mb-5 p-0">
                            <img draggable="false" className="img-fluid" src={"https://pharmaziegasse.at"+props.img} alt="Beautyprogramm starten"/>
                            <div className="mask img-mask"></div>
                        </div>
                        <div className="col-12"><ModalBtn param={props.btn} /></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ props.paragraph }/>))}}></div>
                    {props.footer !== null &&
                        <Alert show="true" className="alert-info" >{ReactHtmlParser(renderToString(<Text value={ props.footer }/>))}</Alert>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default SectionContent
