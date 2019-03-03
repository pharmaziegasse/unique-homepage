import * as React from 'react'

import Nav from "../../molecules/nav";
import Hero from "../../molecules/hero";

const Intro = (props: Props): React.Element<*> => {
    const { items } = props;

    function GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    const App = () => [
        <Nav theme="D">
        <ul class="navbar-nav ml-auto">
            {items.map((item, i) => {
            console.log("Entered");
            return (<li key={i} className={GetState(item.active)} data-id={i}><a class="nav-link" href={item.href}>{item.text}</a></li>) 
            })}
        </ul>
       </Nav>,
       <Hero>test</Hero>
    ];

    return (
        <App/>
      
    )
}

export default Intro
