import React from 'react';

import Nav from "../../molecules/Nav";

class HalfPageIntro extends React.Component{   
    GetState(active) {
        if (active) {
            return "nav-item active";
        }else{
            return "nav-item";
        }
    }

    GetLogo(theme){
        if(theme === "D"){
            return this.props.logos[0].light;
        }else{
            return this.props.logos[0].dark;
        }
    }

    PrintType(item, i){
        if (item.type === "text"){
            if ( item.href.charAt( 0 ) == '#' || item.href.charAt(26) == '#') {
                return (    
                    <li key={i} className={this.GetState(item.active)}>
                        <a className="nav-link m-1 sscroll" href={item.href}>{item.text}</a>
                    </li>
                );
            }else{
                return (    
                    <li key={i} className={this.GetState(item.active)}>
                        <a className="nav-link m-1" href={item.href}>{item.text}</a>
                    </li>
                );
            }
        }else{
            if(this.props.theme === "D"){
                return [
                    <li key={i} className={this.GetState(item.active)}>
                        <a className="ml-5 btn btn-outline-white btn-rounded d-none d-sm-block" href={item.href}>{item.text}</a>
                    </li>,
                    <li key={i+1} className={this.GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href}>{item.text}</a>
                    </li>
                ];
            }else if(this.props.theme === "L"){
                return [
                    <li key={i} className={this.GetState(item.active)}>
                        <a className="ml-5 btn btn-outline-elegant btn-rounded d-none d-sm-block" href={item.href}>{item.text}</a>
                    </li>,
                    <li key={i+1} className={this.GetState(item.active)}>
                    <a className="nav-link m-1 d-block d-sm-none" href={item.href}>{item.text}</a>
                    </li>
                ];
            }
        }
    }

    render() {
        return (
            <header>
                
                <Nav theme={this.props.theme} logo={this.GetLogo(this.props.theme)}>
                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                        {this.props.navitems.map((item, i) => {
                            return(this.PrintType(item,i))
                        })}
                    </ul>
                </Nav>

            </header>
        );
    }
    
};

export default HalfPageIntro;
