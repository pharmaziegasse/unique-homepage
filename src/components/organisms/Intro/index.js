import * as React from 'react'
import { lazy, Suspense } from 'react'
import Loader from "../../organisms/Loader"

// Import atoms
import ModalBtn from "../../atoms/ModalButton"
// Import molecules
// import Nav from "../../molecules/Nav";
// import Hero from "../../molecules/Hero";

const Nav = lazy(() => import("../../molecules/Nav"));
const Hero = lazy(() => import("../../molecules/Hero"));

const Intro = (props: Props): React.Element<*> => {
    const { navitems, heroitems, sociallinks, logos, theme } = props;

    function GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    function GetLogo(theme){
        if(theme === "D"){
            return logos[0].light;
        }else{
            return logos[0].dark;
        }
    }

    function PrintType(item, i){
        if (item.type === "text"){
            if ( item.href.charAt( 0 ) === '#' ) {
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1 sscroll" href={item.href}>{item.text}</a>
                    </li>
                );
            }else{
                return (    
                    <li key={i} className={GetState(item.active)}>
                        <a className="nav-link m-1" href={item.href}>{item.text}</a>
                    </li>
                );
            }
        }else{
            if(theme === "D"){
                return [
                    <li key={i} className={GetState(item.active)}>
                        <ModalBtn btnstyle="WHITE" modal="#modalRegister" className="font-weight-bold d-none d-sm-block">{item.text}</ModalBtn>
                    </li>,
                    <li key={i+1} className={GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href}>{item.text}</a>
                    </li>
                ];
            }else if(theme === "L"){
                return [
                    <li key={i} className={GetState(item.active)}>
                         <ModalBtn btnstyle="oELEGANT" modal="#modalRegister" className="font-weight-bold d-none d-sm-block">{item.text}</ModalBtn>
                    </li>,
                    <li key={i+1} className={GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href}>{item.text}</a>
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
