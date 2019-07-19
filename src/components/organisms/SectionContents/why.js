//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

type Props = {
    content: string
}

/**
 * Section: Why
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { content, btn } = props;
    return (
        <div className="container text-center">
            {props.showHead === true && 
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[0].heading }/>))}}></h2>
            }
            <div className="row section0-row my-5">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[1].icon} alt="Search Icon"/></div>
                        <div className="col-12" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[1].text }/>))}}></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[2].icon} alt="Expert Icon"/></div>
                        <div className="col-12" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[2].text }/>))}}></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[3].icon} alt="Leaf Icon"/></div>
                        <div className="col-12" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[3].text }/>))}}></div>
                    </div>
                </div>
            </div>
            <ModalBtn param={btn} />
        </div>
    )
}

export default SectionContent
