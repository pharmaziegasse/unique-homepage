//** Standard Frameworks */
import * as React from 'react'

class AboutModalContent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

    renderContent (){
        return(
            <div>
                <p>{ this.props.text.companyname }</p>
                <p>
                    { this.props.text.address }
                    <br/>
                    { this.props.text.zip } { this.props.text.city } 
                </p>
                <p>
                    Tel.: { this.props.text.phone }
                    <br/>
                    E-Mail: <a href={"mailto:" + this.props.text.email}>{ this.props.text.email }</a>
                </p>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default AboutModalContent;
