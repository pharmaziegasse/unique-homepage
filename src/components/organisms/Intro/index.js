//** Standard Frameworks */
import * as React from 'react'
//** Extended Standard Frameworks */
import { lazy, Suspense } from 'react'

//** Components */
//** Organisms */
import Loader from "../../organisms/Loader"

//** Social Links */
import SocialLinks from "../../helper/SocialLinks";

//** React Facebook Pixel */
import ReactPixel from 'react-facebook-pixel';

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

//** Lazy Loading */
const Nav = lazy(() => import("../../molecules/Nav"));
const Hero = lazy(() => import("../../molecules/Hero"));

const Intro = (props: Props): React.Element<*> => {
    const { navitems, heroitems, sociallinks, logos } = props;

    //** Get active Menu item */
    function GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    //** Decide which logo to use depending on Nav theme (Light or Dark) */
    function GetLogo(){
        return logos[0].light;
    }

    function sendPixel() {
        const options = {
            autoConfig: true, // set pixel's autoConfig
            debug: false, // enable logs
        };

        let email = localStorage.getItem('f_e');
        // If a user has already registered
        if(email !== undefined && email !== null){
            const advancedMatching = { em: email }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
            ReactPixel.init('398871454084167', advancedMatching, options); // Init Pixel with advanced options
        } else {
            ReactPixel.init('398871454084167', options);
        }

        ReactPixel.track( 'ViewContent', { placement: 'nav' } );
    }

    //** Get Button type */
    function PrintType(item, i){
        //** Smooth Scroll button */
        if (item.type === "text"){
            //** Check if # is in link */
            if ( item.href.charAt( 0 ) === '#' ) {
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1 sscroll" href={item.href} dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ item.text }/>))}}></a>
                    </li>
                );
            }else{
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1" href={item.href} dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ item.text }/>))}}></a>
                    </li>
                );
            }
        }else{
            return [
                <li key={i} className={GetState(item.active)}>
                    <button onClick={sendPixel} data-toggle="modal" data-target="#registration" className="btn btn-white btn-rounded font-weight-bold d-none d-sm-block">
                        {item.text}
                    </button>
                </li>,
                <li key={i+1} className={GetState(item.active)}>
                <a data-toggle="modal" className="nav-link m-1 d-block d-sm-none" href={item.href} dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ item.text }/>))}}></a>
                </li>
            ];
        }
    }
    

    return(
        <header id="home">
        <Suspense fallback={<Loader/>}>
        <Nav logo={GetLogo()}>
            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                {navitems.map((item, i) => {
                    return(PrintType(item,i))
                })}
                 <SocialLinks items={sociallinks} />
                <li className="nav-item">
                    <button onClick={sendPixel} data-toggle="modal" data-target="#_pharmaziegasse_registration" className="btn btn-white btn-rounded font-weight-bold d-none d-sm-block">
                        Loslegen
                    </button>
                </li>
            </ul>
        </Nav>
        </Suspense>
        
        <Suspense fallback={<div></div>}>
            <Hero heroitems={heroitems} />
        </Suspense>
       </header>
    )

}

export default Intro
