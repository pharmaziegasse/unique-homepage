//** Standard Frameworks */
import * as React from 'react';

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

/**
 * Section: Steps
 */
class Steps extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

     //** Rendering the simple item */
    renderItem = (item, i) => {
        let IconClass = "far fa-"+item.icon+" fa-2x";
        return (
            <div className="py-2">
                <i className={IconClass}></i>
                <p className="lead mt-3">STEP {i+1}</p>
                <p className="lead">{item.head}</p>
                <p dangerouslySetInnerHTML={{__html: item.text}}></p>
            </div>
        )
    }

    //** Rendering the elaborate item */

    //** Basic functions */
    isOdd = (i) => {
        return Math.abs(i % 2) === 1;
    }

    //** Render item */
    renderElaborateItem = (item, i) => {
        let IconClass = "far fa-"+item.icon+" fa-2x";
        let rowClass = "row d-flex";
        //** Position of the image (left or right) */
        if(!this.isOdd(i)){
            //** Image is right */
            //** Using the Flex Box flex-direction property to swap positions of the two columns */
            rowClass += " flex-row-reverse";
        }

        return(
            <div className={rowClass} key={i}>
                <div className="col-md-6 p-0">
                    <img className="img-fluid" src="https://dl7bo1dy930sf.cloudfront.net/img/how-it-works-image1.jpg" alt={"step "+(i+1)}/>
                </div>
                <div className="col-md-6 p-0 d-flex justify-content-center">
                    <div className="m-auto pl-5 pr-5">
                        <i className={IconClass}></i>
                        <h2 className="mt-3 mb-0 text-muted">Schritt {i+1}</h2>
                        <p className="lead">{item.head}</p>
                        <p dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </div>
                </div>
            </div>
        )
        
    }

    render(){
        //** User Simple Design or elaborate design with images */
        if(this.props.useSimpleDesign === true){
            return(
                <div className="container py-5">
                    {this.props.showHead === true &&
                        <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: this.props.title}}></h2>
                    }
                    <h4 className="text-muted" dangerouslySetInnerHTML={{__html: this.props.lead}}></h4>
                    <div className="row d-flex justify-content-center mt-5">
                        {this.props.items.map((item, index) => {
                            return(
                                <div key={index} className="col-md-3">
                                    {this.renderItem(item, index)}
                                </div>
                                );
                        })}
                    </div>
                    <ModalBtn param={this.props.btn} />
                </div>
            )
        } else {
            return(
                <div className="container py-5">
                    {this.props.showHead === true &&
                        <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: this.props.title}}></h2>
                    }
                    <h4 className="text-muted mb-5" dangerouslySetInnerHTML={{__html: this.props.lead}}></h4>
                    
                    {this.props.items.map((item, index) => {
                        return(
                            this.renderElaborateItem(item, index)
                        );
                    })}
                    <ModalBtn param={this.props.btn} />
                </div>
            )
        }
        
    }
}

export default Steps;
