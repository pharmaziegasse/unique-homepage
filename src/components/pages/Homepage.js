// standard libs

// other libs
import React, { Component } from "react";

// standard components

// organisms
import Intro from "../organisms/Intro";
import Section from "../organisms/Section";
import Footer from "../organisms/Footer";

// section content organisms
import Section0 from "../organisms/SectionContents/0.js"
import Section1 from "../organisms/SectionContents/1.js"
import Section2 from "../organisms/SectionContents/2.js"

import Section6 from "../organisms/SectionContents/6.js"

import Section8 from "../organisms/SectionContents/8.js"

// Replace with CMS!
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import logo_dark from "./dark.png";
import logo_light from "./light.png";
import icon1 from "./icon1.gif";
import icon2 from "./icon2.gif";
import icon3 from "./icon3.gif";
import section1_img from "./section1.jpg";
import section2_img from "./section2.jpg";

import section8_img from "./section8.jpg";
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
// Section 0
let section0_contents = [
  {heading:"Drei Gründe zu schöner Haut.<br>Garantiert"},
  {icon:icon1,text:"Dein Pflegeprogramm wird individuell nur für dich und für deine Haut entwickelt"},
  {icon:icon2,text:"Experten kümmern sich um deine ganz persönlichen Anforderungen"},
  {icon:icon3,text:"Deine Haut wird auf Dauer mit ehricher, frischer und natürlicher Pflege made in Austria versorgt"},
  {btntext:"Beautyprogramm starten",btnhref:"/start"}
]
// Section 1
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
let section1_contents = [
  {heading:"Individuelles Programm"},
  {img:section1_img},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {lead:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Test"},
  {paragraph:"Number of paragraphs is flexible"},
]
// Section 2
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
let section2_contents = [
  {heading:"Analyse von Experten"},
  {img:section2_img},
  {btntext:"Beautyprogramm starten",btnhref:"/start"},
  {lead:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Test"},
  {paragraph:"Number of paragraphs is flexible"},
]

// Section 3

// Section 4

// Section 5

// Section 6
let section6_contents = [
  {heading:"Was unsere Kunden sagen"}
]
let reviews = [
  {name:"Max Mustermann",img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",quote:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",info:"Position und Firma"},
  {name:"Maxine Musterfrau",img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",quote:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At vero eos et accusam et justo duo dolores et ea rebum.",info:"Position und Firma"},
]

// Section 7

// Section 8
// Number of paragraphs is flexible. Just add more or less and the view will render accordingly
let section8_contents = [
  {heading:"Über uns"},
  {img:section8_img},
  {paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {paragraph:"Number of paragraphs is flexible"},
]
// Rendering of all active organisms
class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <Intro logo={logos[0].light} navitems={navitems} heroitems={heroitems} sociallinks={sociallinks}/>
        <Section background="BLUE" data-id="0"><Section0 content={section0_contents}/></Section>
        <Section background="LIGHTBLUE" data-id="1"><Section1 content={section1_contents}/></Section>
        <Section background="WHITE" data-id="2"><Section2 content={section2_contents}/></Section>
        <Section background="LIGHTBLUE" data-id="3">3</Section>
        <Section background="GREY" data-id="4">4</Section>
        <Section background="LIGHTGREY" data-id="5">5</Section>
        <Section background="BLUE" data-id="6"><Section6 content={section6_contents} reviews={reviews}/></Section>
        <Section background="LIGHTBLUE" data-id="7">7</Section>
        <Section background="WHITE" data-id="8"><Section8 content={section8_contents}/></Section>
        <Footer sociallinks={sociallinks} companyinfo={companyinfo} logo={logos[0].dark}/>
      </main>
    );
  }
}

export default Homepage;
