import * as React from 'react'

//Import molecules
import Nav from "../../molecules/nav";
import Hero from "../../molecules/hero-carousel";

const Intro = (props: Props): React.Element<*> => {
    const { navitems, heroitems, sociallinks, logo } = props;

    function GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    function GetType(type){
        if (type === "text"){
            return "nav-link m-1";
        }else{
            return "ml-5 btn btn-outline-white btn-rounded";
        }
    }

    const App = () => [
        <Nav theme="D" logo={logo}>
        <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
            {navitems.map((item, i) => {
                return (<li key={i} className={GetState(item.active)} data-id={i}><a className={GetType(item.type)} href={item.href}>{item.text}</a></li>) 
            })}
        </ul>
       </Nav>,
       <Hero heroitems={heroitems} sociallinks={sociallinks}/>
    ];

    return (
        <App/>
      
    )
}

export default Intro
