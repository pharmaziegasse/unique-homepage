import React from 'react'
import classnames from 'classnames/bind'

class Checkbox extends React.Component{
    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    validate() {
        if(this.props.validation) {
            return "valid";
        } else if (this.props.validation === false) {
            return "invalid";
        }
    }

    render() {
        const classProps: string = classnames(
            "form-control",
            this.props.className,
            this.validate()
        )

        return (
           <input className={classProps} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.onFieldChange.bind(this)} />
        );
    }
    
};

export default Checkbox;
