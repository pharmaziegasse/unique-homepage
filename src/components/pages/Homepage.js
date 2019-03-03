// standard libs

// other libs
import React, { Component } from "react";

// standard components

// organisms
import Intro from "../organisms/intro";

let navitems = [
  {href:"/why-us", text:"Warum TheUniqueStory?", active:false, type:"text"},
  {href:"/how-it-works", text:"Wie funktioniert es?", active:false, type:"text"},
  {href:"/pricing", text:"Preise", active:false, type:"text"},
  {href:"/about-us", text:"Über uns", active:false, type:"text"},
  {href:"/getting-started", text:"Loslegen", active:false, type:"button"}
];

// Rendering of all active organisms
class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <Intro items={navitems}/>
      </main>
    );
  }
}

export default Homepage;
