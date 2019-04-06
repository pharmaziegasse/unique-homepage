import * as React from 'react'
import InstagramEmbed from 'react-instagram-embed';

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
                <h2 className="font-weight-bold">Instagram gallery</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BvkEkPmH0Hh/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                    <div className="col-md-4">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/Bve5PDonpAD/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                    <div className="col-md-4">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BvcT8Pbn9An/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default Gallery;
