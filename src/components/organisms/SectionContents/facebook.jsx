//** Standard Frameworks */
import * as React from 'react'
//** Additional Frameworks */
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

/**
 * Section: Facebook
 */
class Facebook extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

    //** Render Facebook Post Embed */
    renderProvider = (url, i) => {
        return(
            <div key={i} className={this.getDivider(i)}>
                <p>Test</p>
                <EmbeddedPost href={url} width="300" />
            </div>
        );
    }

    //** Makes sure the alignment of the posts is visualiy pleasing, no matter the number of posts */
    getDivider = (i) => {
        switch(this.props.urls.length){
            case 1: {
                return "fb-post col-md-12";
            }
            case 2: {
                return "fb-post col-md-6";
            }
            case 3: {
                return "fb-post col-md-4 mt-4";
            }
            case 4: {
                if(i < 3){
                    return "fb-post col-md-4 mt-4";
                }else{
                    //** To center the last one */
                    return "fb-post col-md-12 mt-4"; 
                }
            }
            case 5: {
                if(i < 3){
                    return "fb-post col-md-4 mt-4";
                }else{
                    //** To center the last two */
                    return "fb-post col-md-6 mt-4"; 
                }
            }
            case 6: {
                return "fb-post col-md-4 mt-4";
            }
            default: {
                return "fb-post col-md-12";
            }
        }
    }

    //** Support for non-container look */
    getContainer = () => {
        if(this.props.urls.length > 2 && this.props.urls.length < 5){
            //** Change to || return "py-5" || to have no container, if there are more than 2 Facebook posts */
            //** Please make sure to change the getDivider function return values accordingly */
            return "container py-5"
        } else {
            return "container py-5"
        }
    }

    renderContent (){
        return(
            <div className="container">
                {this.props.showHead === true &&
                    <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: this.props.title}}></h2>
                }
                <div className="row mt-4 w-100">
                    <FacebookProvider appId="438514240304319">
                    {this.props.urls.map((c, i) => {
                        return(
                            this.renderProvider(c.url, i)
                        )
                    })}
                     
                    </FacebookProvider>
                </div>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default Facebook;
