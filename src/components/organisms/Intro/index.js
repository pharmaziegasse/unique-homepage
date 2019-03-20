import * as React from 'react'

//Import molecules
import Nav from "../../molecules/Nav";
import Hero from "../../molecules/Hero";

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
            if ( item.href.charAt( 0 ) == '#' ) {
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
                        <a className="ml-5 btn btn-outline-white btn-rounded d-none d-sm-block" href={item.href}>{item.text}</a>
                    </li>,
                    <li key={i+1} className={GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href}>{item.text}</a>
                    </li>
                ];
            }else if(theme === "L"){
                return [
                    <li key={i} className={GetState(item.active)}>
                        <a className="ml-5 btn btn-outline-elegant btn-rounded d-none d-sm-block" href={item.href}>{item.text}</a>
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
        <Nav theme={theme} logo={GetLogo(theme)}>
            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                {navitems.map((item, i) => {
                    return(PrintType(item,i))
                })}
            </ul>
        </Nav>
        <Hero heroitems={heroitems} sociallinks={sociallinks}/>
       </header>
    )

}

export default Intro
