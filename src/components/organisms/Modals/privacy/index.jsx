//** Standard Frameworks */
import * as React from 'react'

//** Helpers */
//** Personalization */
import Text from "../../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

class PrivacyModalContent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

   
    renderContent (){
        return(
            <div>
                <p className="text-left" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ this.props.text }/>))}}></p>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default PrivacyModalContent;
