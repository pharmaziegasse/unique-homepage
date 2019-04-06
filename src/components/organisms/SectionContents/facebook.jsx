import * as React from 'react'
import { FacebookProvider, EmbeddedPost, MessageUs  } from 'react-facebook';

// Icons
import { FaInstagram } from 'react-icons/fa';


class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    renderContent (){
        
        return(
            <div className="container py-5">
                <h2 className="font-weight-bold">Facebook posts</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <FacebookProvider appId="438514240304319">
                            <EmbeddedPost href="https://www.facebook.com/pharmaziegasse/photos/a.312926582694305/340466783273618" width="500" />
                        </FacebookProvider>
                    </div>
                    <div className="col-md-6">
                        <FacebookProvider appId="438514240304319">
                            <EmbeddedPost href="https://www.facebook.com/SithCult/posts/2011275129133029" width="500" />
                        </FacebookProvider>
                    </div>
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

export default Gallery;
