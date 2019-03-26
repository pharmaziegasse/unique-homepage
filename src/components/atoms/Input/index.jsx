import React from 'react'
import classnames from 'classnames/bind'

class Checkbox extends React.Component{   
    render() {
        const classProps: string = classnames(
            "form-control",
            this.props.className
        )

        return (
           <input className={classProps} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
        );
    }
    
};

export default Checkbox;
