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

    render() {
        //** Combine multiple values for className */
        const classProps: string = classnames(
            "alert",
            this.props.className
        )        
        
        //** Check if Alert is visible */
        if(this.state.visible){
            return (
                <div className={classProps} role="alert">
                    {this.props.children}
                </div>
            );
        } else {
            return false;
        }
    }
};

export default Alert;
