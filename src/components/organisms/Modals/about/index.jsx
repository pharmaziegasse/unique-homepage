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
                <p>
                    der<br/>
                    Pharmaziegasse Kosmetik GmbH<br/>
                    Pharmaziegasse 5, 9020 Klagenfurt<br/>
                    <br/>
                    <br/>
                    Die Daten können bald im CMS geändert werden.
                    <br/>
                    <br/>
                    Pharmaziegasse Kosmetik GmbH<br/>
                    Pharmaziegasse 5, 9020 Klagenfurt - Austria<br/>
                    Tel.: +43 463 504404 <br/>
                    E-Mail: office@pharmaziegasse.at<br/>
                    Website: https://www.pharmaziegasse.at<br/>
                </p>
            </div>
        )
    }

    render(){
        return this.renderContent();
    }
}

export default AboutModalContent;
