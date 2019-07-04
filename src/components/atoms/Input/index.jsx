//** Standard Frameworks */
import React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

/**
 * General Input Component
 */
class Input extends React.Component{
    //** Change handler */
    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    //** Validator */
    validate() {
        if(this.props.validation) {
            return "valid";
        } else if (this.props.validation === false) {
            return "invalid";
        }
    }

    render() {
        //** Combine multiple values for className */
        const classProps: string = classnames(
            "form-control",
            this.props.className,
            this.validate()
        )

        return (
           <input className={classProps} type={this.props.type} value={this.props.value} name={this.props.name} placeholder={this.props.placeholder} onChange={this.onFieldChange.bind(this)} />
        );
    }
    
};

export default Input;
