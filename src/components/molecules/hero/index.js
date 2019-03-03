import * as React from 'react'
import classnames from 'classnames/bind'

//Themes
/*import Mask from './hero_mask.js';

var hmask = classnames.bind(Mask);
*/
type Props = {
    className: string
}

const Hero = (props: Props): React.Element<*> => {
    const { className } = props;

    const classProps: string = classnames(
        className,
        "view",
        "jarallax"
    )

    const divStyle = {
        backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    };

    return (
       <div className={classProps} data-jarallax='{"speed": 0.2}' style={divStyle}>
            <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-4 white-text text-center">
                            <h1 class="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>Lorem Ipsum</strong></h1>
                            <hr class="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s" />
                            <h5 class="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Lol & lel</strong></h5>
                            <a class="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s"></a>
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
