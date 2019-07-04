//** Standard Frameworks */
import * as React from 'react'
//** Extended Standard Frameworks */
import { lazy, Suspense } from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"
//** Organisms */
import Loader from "../../organisms/Loader"

//** Lazy Loading */
const Nav = lazy(() => import("../../molecules/Nav"));
const Hero = lazy(() => import("../../molecules/Hero"));

const Intro = (props: Props): React.Element<*> => {
    const { navitems, heroitems, sociallinks, logos, theme } = props;

    //** Get active Menu item */
    function GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    //** Decide which logo to use depending on Nav theme (Light or Dark) */
    function GetLogo(theme){
        if(theme === "D"){
            return logos[0].light;
        }else{
            return logos[0].dark;
        }
    }

    //** Get Button type */
    function PrintType(item, i){
        //** Smooth Scroll button */
        if (item.type === "text"){
            //** Check if # is in link */
            if ( item.href.charAt( 0 ) === '#' ) {
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1 sscroll" href={item.href} dangerouslySetInnerHTML={{__html: item.text}}></a>
                    </li>
                );
            }else{
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1" href={item.href} dangerouslySetInnerHTML={{__html: item.text}}></a>
                    </li>
                );
            }
        }else{
            if(theme === "D"){
                //** Dark Theme */
                return [
                    <li key={i} className={GetState(item.active)}>
                        <ModalBtn btnstyle="WHITE" modal="#modalRegister" className="font-weight-bold d-none d-sm-block">{item.text}</ModalBtn>
                    </li>,
                    <li key={i+1} className={GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href} dangerouslySetInnerHTML={{__html: item.text}}></a>
                    </li>
                ];
            }else if(theme === "L"){
                //** Light Theme */
                return [
                    <li key={i} className={GetState(item.active)}>
                         <ModalBtn btnstyle="oELEGANT" modal="#modalRegister" className="font-weight-bold d-none d-sm-block">{item.text}</ModalBtn>
                    </li>,
                    <li key={i+1} className={GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href} dangerouslySetInnerHTML={{__html: item.text}}></a>
                    </li>
                ];
            }
        }
    }
    

    return(
        <header id="home">
        <Suspense fallback={<Loader/>}>
        <Nav theme={theme} logo={GetLogo(theme)}>
            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                {navitems.map((item, i) => {
                    return(PrintType(item,i))
                })}
            </ul>
        </Nav>
        </Suspense>
        
        <Suspense fallback={<div></div>}>
            <Hero heroitems={heroitems} sociallinks={sociallinks}/>
        </Suspense>
       </header>
    )

}

export default Intro
