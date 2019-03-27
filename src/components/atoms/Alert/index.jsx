import React from 'react'
import classnames from 'classnames/bind'

class Alert extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           visible: props.show
        }
    }

    render() {
        const classProps: string = classnames(
            "alert",
            this.props.className
        )
        
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
