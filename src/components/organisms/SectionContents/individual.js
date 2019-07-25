//** Standard Frameworks */
import * as React from 'react'

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
 * Section: Individual
 */
const SectionContent = (props: Props): React.Element<*> => {
    console.log(props);
    //** Basic functions */
    function isOdd (i) {
        return Math.abs(i % 2) === 1;
    }

    let rowClass = "row my-5 d-flex";
    if(props.index !== undefined){
        if(isOdd(props.index)){
            //** Image is right */
            //** Using the Flex Box flex-direction property to swap positions of the two columns */
            rowClass += " flex-row-reverse";
        }
    }
    
    return (
        
        <div className="container text-left">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ props.heading }/>))}}></h2>
            }
            <div className={rowClass}>
                <div className="col-md-6">
                    <div dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ props.paragraph }/>))}}></div>
                    {props.footer !== null &&
                        <Alert show="true" className="alert-info">{ReactHtmlParser(renderToString(<Text value={ props.footer }/>))}</Alert>
                    }
                    
                </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                        <div className="col-12 mb-5"><img draggable="false" className="img-fluid" src={"https://pharmaziegasse.at"+props.img} alt="Beautyprogramm starten"/></div>
                        <div className="col-12">
                            <ModalBtn param={props.btn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionContent
