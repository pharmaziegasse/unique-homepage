//** Standard Frameworks */
import * as React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

//** Additional visual values */
import ButtonType from './btn_types.js';

//** React Facebook Pixel */
import ReactPixel from 'react-facebook-pixel';

/**
 * POSSIBLE VALUES
 * R (Rounded)
 */
import ButtonStyle from './btn_styles.js';
/**
 * POSSIBLE VALUES
 * DANGER: Red
 * SUCCESS: Green
 * WARNING: Orange
 * INFO: Light Blue
 * PRIMARY: Blue
 * SECONDARY: Purple
 * WHITE: White
 * ELEGANT: Dark Grey
 * oDANGER: Red (outline)
 * oSUCCESS: Green (outline)
 * oWARNING: Orange (outline)
 * oINFO: Light Blue (outline)
 * oPRIMARY: Blue (outline)
 * oSECONDARY: Purple (outline)
 * oWHITE: White (outline)
 * oELEGANT: Dark Grey (outline)
 */
import ButtonSize from './btn_sizes.js';
/**
 * POSSIBLE VALUES
 * SM (Small)
 * MD (Medium)
 * LG (Large)
 */

//** Connect additional visual values with classname */
var cbs = classnames.bind(ButtonSize);
var cbst = classnames.bind(ButtonStyle);
var cbt = classnames.bind(ButtonType);

/**
 * General Button Element
 */
class Button extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visible: false
        }
    }

    //** Convert url to Modal */
    isModal = () => {
        if(this.exists()){
            if(this.props.param.buttonLink === null || this.props.param.buttonLink === undefined){
                this.props.param.buttonPage.urlPath = this.props.param.buttonPage.urlPath.replace('/','#');
                return true;
            }
            if(this.props.param.buttonLink !== null && this.props.param.buttonLink !== undefined){
                console.error("Link");
                return false;
            } 
        }
        
    }

    //** Check if button should be displayed */
    exists = () => {
        if(this.props.param === undefined || this.props.param === null){
            return false;
        } else {
            if(this.props.param.buttonPage || this.props.param.buttonLink){
                return true;
            } else {
                return false;
            }
        }
    }

    //** Combine multiple values for className */
    getClassProps = () => {
        let props = classnames(
            "btn",
            "font-weight-bold",
            cbst(this.props.btnstyle),
            cbt(this.props.btntype),
            cbs(this.props.size),
            this.props.disabled,
            this.props.className
        )
        return props;
    }

    sendPixel = () => {
        const options = {
            autoConfig: true, // set pixel's autoConfig
            debug: false, // enable logs
        };

        let email = localStorage.getItem('f_e');
        // If a user has already registered
        if(email !== undefined && email !== null){
            const advancedMatching = { em: email }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
            ReactPixel.init('398871454084167', advancedMatching, options); // Init Pixel with advanced options
        } else {
            ReactPixel.init('398871454084167', options);
        }

        ReactPixel.track( 'ViewContent', { placement: 'body' } );
    }
    
    render() {
        return (
            <>
                { this.exists() &&
                    <div>
                        {this.isModal() ? (
                                <button onClick={this.sendPixel} data-toggle="modal" data-target={this.props.param.buttonPage.urlPath} className={this.getClassProps()}>
                                    {this.props.param.buttonTitle}
                                </button>
                            ) : (
                                <a href={this.props.param.buttonLink} className={this.getClassProps()}>
                                    {this.props.param.buttonTitle}
                                </a>
                            )
                        }
                    </div>
                }
            </>
        )
    }
    
}

//** Define how a default button should look (without any additional information provided) */
Button.defaultProps = {
    size: ButtonSize.DEFAULT,
    btnstyle: ButtonStyle.WHITE,
    btntype: ButtonType.R,
    className: '',
    disabled: false,
    buttonLink: null,
    buttonTitle: "Unnamed",
    btnhref: ""
}

export default Button
