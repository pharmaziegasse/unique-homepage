//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
import InstagramEmbed from 'react-instagram-embed';

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

/**
 * Section: Instagram
 */
class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    //** Show captions or not */
    captionStatus = () => {
        if(this.props.captions){
            return false;
        }else{
            return true;
        }
    }

    //** Makes sure the alignment of the posts is visualiy pleasing, no matter the number of posts */
    getDivider = (i) => {
        switch(this.props.urls.length){
            case 1: {
                return "col-md-12";
            }
            case 2: {
                return "col-md-6";
            }
            case 3: {
                return "col-md-4 mt-4";
            }
            case 4: {
                if(i < 3){
                    return "col-md-4 mt-4";
                }else{
                    //** To center the last one */
                    return "col-md-12 mt-4"; 
                }
            }
            case 5: {
                if(i < 3){
                    return "col-md-4 mt-4";
                }else{
                    //** To center the last two */
                    return "col-md-6 mt-4"; 
                }
            }
            case 6: {
                return "col-md-4 mt-4";
            }
            default: {
                return "col-md-12";
            }
        }
    }

    renderEmbed = (url, i) => {
        return(
            <div key={i} className={this.getDivider(i)}>
                <InstagramEmbed
                    url={url}
                    maxWidth={320}
                    hideCaption={this.captionStatus()}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
            </div>
        );
    }

    renderContent (){
        
        return(
            <div className="container instagram">
                {this.props.showHead === true &&
                    <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ this.props.title }/>))}}></h2>
                }
                <div className="row mt-5">
                    {this.props.urls.map((c, i) => {
                        return(
                            this.renderEmbed(c.url, i)
                        )
                    })}
                </div>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default Gallery;
