//** Standard Frameworks */
import * as React from 'react'

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

/**
 * Section: Pricing
 */
class Pricing extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    getType = (i) => {
        if(i === 1){
            return 'card premium pb-4';                 
        }else{
            return 'card pricing-card pb-4';
        }
    }

    //** Get column based on item count */
    getWidth = () => {
        let count = this.props.cards.length;
        
        switch (count) {
            case 1:
                return "col-md-6 m-auto mb-4";
            case 2:
                return "col-md-6 mb-4";
            case 3:
                return "col-md-4 mb-4";
            default:
                return "col-md-4 mb-4";
        }
    }

    //** Detect if Text should be white or black */
    hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    isDark = (bg) => {
        let r = this.hexToRgb(bg).r;
        let g = this.hexToRgb(bg).g;
        let b = this.hexToRgb(bg).b;
        let rgb = "rgb("+r+","+g+","+b+")";

        let match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(rgb);
        let result = ( match[1] & 255 )
            + ( match[2] & 255 )
            + ( match[3] & 255 )
            < 3 * 256 / 1.2;
        if(result){
            return "pricing-description p-4 text-white";
        } else {
            return "pricing-description p-4 text-grey";
        }
    }

    render(){
        
        return (
            <div className="container">
                {this.props.showHead === true &&
                    <h2 className="h1-responsive font-weight-bold mb-5" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ this.props.heading }/>))}}></h2>
                }
                <div className="row">
                    {this.props.cards.map((value, i) => {
                        let modalID = "#paymentModal"+value.index;
                        return (
                            <div key={i} className={this.getWidth()}>
                                <div className={this.getType(i)}>
                                    <h3 className="text-uppercase font-weight-bold my-4">{value.title}</h3>
                                    <div className={this.isDark(value.bg)} style={{backgroundColor: value.bg}}>
                                        <p className="m-0" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ value.description }/>))}}></p>
                                    </div>
                                    <div className="card-body striped p-0">
                                        <div className="py-4">
                                            <p className="text-uppercase mb-0 pricetag">Preis</p>
                                            <p className="text-muted mb-0">€ {value.price}</p>
                                        </div>
                                        <hr className="mt-0"/>
                                        <button data-toggle="modal" data-target={modalID} className="btn btn-rounded btn-pharmaziegasse font-weight-bold">Jetzt starten!</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Pricing
