// standard libs

// other libs
import React, { Component } from "react";

// standard components

// organisms
import Intro from "../organisms/intro";
import Section from "../organisms/section";
import Footer from "../organisms/footer";

//Replace with CMS!
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import logo_dark from "./dark.png";
import logo_light from "./light.png";
/* Later to be replaced with headless CMS content */
let navitems = [
  {href:"/why-us", text:"Warum TheUniqueStory?", active:false, type:"text"},
  {href:"/how-it-works", text:"Wie funktioniert es?", active:false, type:"text"},
  {href:"/pricing", text:"Preise", active:false, type:"text"},
  {href:"/about-us", text:"Über uns", active:false, type:"text"},
  {href:"/getting-started", text:"Loslegen", active:false, type:"button"}
];
let heroitems = [
  {img:bg1,head:"Don't call it a cream,<br>call it your unique<br>program.", subhead:"Deine persönliche Erfolgsstory zu schöner Haut durch individuelle Beautyprogramme von erfahrenen Experten.",btntext:"Beautyprogramm starten",btnhref:"/start"},
  {img:bg2,head:"Don't call it a cream,<br>call it Lorem Ipsum.", subhead:"Lorem Ipsum Dolor sit amet.",btntext:"",btnhref:""}
]
let sociallinks = [
  {fb:"https://www.facebook.com", ig:"https://www.instagram.com"}
]
let companyinfo = [
  {city:"Klagenfurt",zip:"9020",address:"Pharmaziegasse 5",phone:"+43 463 45 904-0",email:"office@theuniquestory.com",copyrightholder:"TheUniqueStory"}
]
let logos = [
  {light:logo_light,dark:logo_dark}
]
// Rendering of all active organisms
class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <Intro logo={logos[0].light} navitems={navitems} heroitems={heroitems} sociallinks={sociallinks}/>
        <Section background="BLUE">Test</Section>
        <Section background="LIGHTBLUE">Test</Section>
        <Section background="WHITE">Test</Section>
        <Section background="LIGHTBLUE">Test</Section>
        <Section background="GREY">Test</Section>
        <Section background="LIGHTGREY">Test</Section>
        <Section background="BLUE">Test</Section>
        <Section background="LIGHTBLUE">Test</Section>
        <Section background="WHITE">Test</Section>
        <Footer sociallinks={sociallinks} companyinfo={companyinfo} logo={logos[0].dark}/>
      </main>
    );
  }
}

export default Homepage;
