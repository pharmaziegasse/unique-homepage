import * as React from 'react'
import { FacebookProvider, EmbeddedPost, MessageUs  } from 'react-facebook';

// Icons
import { FaInstagram } from 'react-icons/fa';


class Facebook extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

    renderProvider = (url, i) => {
        return(
            <div key={i} className={this.getDivider(i)}>
                <EmbeddedPost href={url} width="300" />
            </div>
        );
    }

    // Makes sure the alignment of the posts is visualiy pleasing, no matter the number of posts
    getDivider = (i) => {
        switch(this.props.content[0].urls.length){
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

    // Support for non-container look
    getContainer = () => {
        console.log(this.props.content[0].urls.length);
        if(this.props.content[0].urls.length > 2 && this.props.content[0].urls.length < 5){
            // Change to || return "py-5" || to have no container, if there are more than 2 Facebook posts
            // Please make sure to change the getDivider function return values accordingly
            return "container py-5"
        } else {
            return "container py-5"
        }
    }

    renderContent (){
        console.log(this.props.content);
        return(
            <div className="container py-5">
                <h2 className="font-weight-bold">{this.props.content[0].title}</h2>
                <div className="row mt-4 w-100">
                    <FacebookProvider appId="438514240304319">
                    {this.props.content[0].urls.map((c, i) => {
                        return(
                            this.renderProvider(c.value, i)
                        )
                    })}
                     
                    </FacebookProvider>
                </div>
                <FacebookProvider appId="438514240304319">
                    <MessageUs messengerAppId="438514240304319" pageId="123456789"/>
                </FacebookProvider> 
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default Facebook;
