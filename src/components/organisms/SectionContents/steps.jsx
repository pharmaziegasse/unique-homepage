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

    render(){

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
    }
}

export default Steps;
