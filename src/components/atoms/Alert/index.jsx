//** Standard Frameworks */
import React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

/**
 * General Alert component
 */
class Alert extends React.Component{
    constructor(props){
       super(props);
       //** This state controls the visibility / rendering of the component internally */
       this.state = {
           visible: props.show
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

    isDark = () => {
        if(this.props.bg === null || this.props.bg === undefined){
            return null;
        } else {
            let r = this.hexToRgb(this.props.bg).r;
            let g = this.hexToRgb(this.props.bg).g;
            let b = this.hexToRgb(this.props.bg).b;
            let rgb = "rgb("+r+","+g+","+b+")";

            let match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(rgb);
            let result = ( match[1] & 255 )
                + ( match[2] & 255 )
                + ( match[3] & 255 )
                < 3 * 256 / 1.2;
            if(result){
                return "text-white";
            } else {
                return "text-grey";
            }
        }
    }

    render() {
        //** Combine multiple values for className */
        const classProps: string = classnames(
            "alert",
            this.props.className,
            this.isDark()
        )        
        
        //** Check if Alert is visible */
        if(this.state.visible){
            return (
                <div className={classProps} style={{backgroundColor: this.props.bg}} role="alert">
                    {this.props.children}
                </div>
            );
        } else {
            return false;
        }
    }
};

export default Alert;
