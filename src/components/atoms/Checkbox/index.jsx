import React from 'react'
import classnames from 'classnames/bind'

class Checkbox extends React.Component{   
    rand = Math.floor((Math.random() * 1000) + 1);

    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.checked;
        this.props.onChange(fieldName, fieldValue);
    }

    render() {
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
