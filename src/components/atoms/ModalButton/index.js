//** Standard Frameworks */
import * as React from 'react'
//** Extended Standard Frameworks */
import classnames from 'classnames/bind'

//** Additional visual values */
import ButtonType from './btn_types.js';
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

//** Preconfigure datatypes */
type Props = {
    btnstyle: string,
    size: string,
    children: React.Node,
    className: string,
    disabled: boolean
}

/**
 * General Button Element
 */
const Button = (props: Props): React.Element<*> => {
    const { btnstyle, btntype, size, children, className, disabled, modal } = props;

    //** Combine multiple values for className */
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
        <button data-toggle="modal" data-target={modal} className={classProps}>
            {children}
        </button>
    )
}

//** Define how a default button should look (without any additional information provided) */
Button.defaultProps = {
    size: ButtonSize.DEFAULT,
    btnstyle: ButtonStyle.oWHITE,
    btntype: ButtonType.R,
    className: '',
    disabled: false
}

export default Button
