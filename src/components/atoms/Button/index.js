/* Buttons */

import * as React from 'react'
import classnames from 'classnames/bind'

import ButtonType from './btn_types.js';
import ButtonStyle from './btn_styles.js';
import ButtonSize from './btn_sizes.js';

var cbs = classnames.bind(ButtonSize);
var cbst = classnames.bind(ButtonStyle);
var cbt = classnames.bind(ButtonType);

type Props = {
    btnstyle: string,
    size: string,
    href: string,
    children: React.Node,
    className: string,
    disabled: boolean
}

const Button = (props: Props): React.Element<*> => {
    const { btnstyle, btntype, size, href, children, className, disabled, onClick } = props;

    const classProps: string = classnames(
        "btn",
        cbst(btnstyle),
        cbt(btntype),
        cbs(size),
        {
            disabled
        },
        className
    )

    return (
        <a href={href} className={classProps} onClick={onClick} >
            {children}
        </a>
    )
}

Button.defaultProps = {
    size: ButtonSize.DEFAULT,
    btnstyle: ButtonStyle.oWHITE,
    btntype: ButtonType.R,
    className: '',
    disabled: false
}

export default Button
