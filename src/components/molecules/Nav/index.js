import * as React from 'react'
import classnames from 'classnames/bind'

//Themes
import NavTheme from './nav_themes.js';

var navt = classnames.bind(NavTheme);

type Props = {
    children: React.Node,
    theme: string,
    className: string
}

const Nav = (props: Props): React.Element<*> => {
    const { logo, children, theme, className } = props;

    const classProps: string = classnames(
        "navbar",
        "navbar-expand-lg",
        "fixed-top",
        "scrolling-navbar",
        navt(theme),
        className,
        "text-white",
        "z-depth-0"
    )

    return (
        <nav className={classProps}>
            <div className="container">
                <a className="navbar-brand sscroll" href="#home"><strong><img src={logo} alt="The Unique Story"/></strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     {children}
                </div>
            </div>
        </nav>
    )
}

Nav.defaultProps = {
   theme: NavTheme.L
}

export default Nav
