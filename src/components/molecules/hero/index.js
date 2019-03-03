import * as React from 'react'
import classnames from 'classnames/bind'

//Import atoms

//Other res
import bg1 from "./bg1.jpg";

//Themes
/*import Mask from './hero_mask.js';

var hmask = classnames.bind(Mask);
*/
type Props = {
    className: string,
    children: React.Node,
}

const Hero = (props: Props): React.Element<*> => {
    const { className, children } = props;

    const classProps: string = classnames(
        className,
        "view",
        "jarallax"
    )

    const divStyle = {
        backgroundImage: 'url('+ bg1 +')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    };

    return (
       <div className={classProps} data-jarallax='{"speed": 0.2}' style={divStyle}>
            <div className="mask hero-gradient d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 white-text text-left">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*Hero.defaultProps = {
   theme: NavTheme.L,
   logo: logofile
}*/

export default Hero
