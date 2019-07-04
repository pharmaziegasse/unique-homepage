//** Standard Frameworks */
import React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

/**
 * General Checkbox Component
 */
class Checkbox extends React.Component{
    //** Get a random number for ID purposes - probably better and saver to create unique IDs */
    rand = Math.floor((Math.random() * 1000) + 1);

    //* Change function (check -> uncheck || uncheck -> check) */
    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.checked;
        this.props.onChange(fieldName, fieldValue);
    }

    render() {
        //** Combine multiple values for className */
        const classProps: string = classnames(
            "form-check",
            this.props.className
        )

        return (
            <div className={classProps}>
                <input type="checkbox" name={this.props.name} className="form-check-input" id={this.props.name + "-" + this.rand} checked={this.props.checked} onChange={this.onFieldChange.bind(this)} />
                <label className="form-check-label text-left" htmlFor={this.props.name + "-" + this.rand} >{this.props.children}</label>
            </div>
        );
    }
    
};

export default Checkbox;
