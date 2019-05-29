import * as React from 'react'
import InstagramEmbed from 'react-instagram-embed';

// Icons
// import { FaInstagram } from 'react-icons/fa';


class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    captionStatus = () => {
        if(this.props.captions){
            return false;
        }else{
            return true;
        }
    }

    // Makes sure the alignment of the posts is visualiy pleasing, no matter the number of posts
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
                    // To center the last one
                    return "col-md-12 mt-4"; 
                }
            }
            case 5: {
                if(i < 3){
                    return "col-md-4 mt-4";
                }else{
                    // To center the last two
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
            <div className="container instagram py-5">
                <h2 className="font-weight-bold">{this.props.title}</h2>
                <div className="row mt-4">
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
