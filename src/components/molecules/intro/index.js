import * as React from 'react'

//Import atoms
import Btn from "../../atoms/button"

import Nav from "../../molecules/nav";
import Hero from "../../molecules/hero";
import HeroContent from "../../molecules/hero_content";



const Intro = (props: Props): React.Element<*> => {
    const { items } = props;

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
        <Nav theme="D">
        <ul class="navbar-nav ml-auto d-flex justify-content-center align-items-center">
            {items.map((item, i) => {
            return (<li key={i} className={GetState(item.active)} data-id={i}><a className={GetType(item.type)} href={item.href}>{item.text}</a></li>) 
            })}
        </ul>
       </Nav>,
       <Hero>
            <HeroContent/>
       </Hero>
    ];

    return (
        <App/>
      
    )
}

export default Intro
