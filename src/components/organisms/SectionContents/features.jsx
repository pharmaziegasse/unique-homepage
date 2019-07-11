//** Standard Frameworks */
import * as React from 'react';

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

/**
 * Section: Features
 */
class Features extends React.Component{

    //** Render feature item */
    renderItem = (item) => {
        let IconClass = "fas fa-"+item.icon+" fa-2x";
        return(
            <div className="row">
                <div className="col-auto pl-0 pr-1 pt-2">
                    <i className={IconClass}></i>
                </div>
                <div className="col text-left">
                    <p className="lead mb-0">{item.head}</p>
                    <p dangerouslySetInnerHTML={{__html: item.text}}></p>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="container py-5">
                {this.props.showHead === true &&
                    <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: this.props.title}}></h2>
                }
                    <h4 className="text-muted" dangerouslySetInnerHTML={{__html: this.props.lead}}></h4>
                    <div className="row mt-5">
                        {this.props.items.map((item, index) => {
                            return(
                                <div key={index} className="col-md-6">
                                    {this.renderItem(item)}
                                </div>
                                );
                        })}
                    </div>
                    <ModalBtn param={this.props.btn} />
                
            </div>
        )
    }
}

export default Features;
