// standard libs

// other libs
import React, { Component } from "react";

// standard components

// organisms
import Intro from "../../organisms/Intro";
import Section from "../../organisms/Section";
import Footer from "../../organisms/Footer";

// section content organisms
import Section0 from "../../organisms/SectionContents/0.js"
import Section1 from "../../organisms/SectionContents/1.js"
import Section2 from "../../organisms/SectionContents/2.js"
import Section3 from "../../organisms/SectionContents/3.js"
import Section4 from "../../organisms/SectionContents/4.js"
import Section5 from "../../organisms/SectionContents/5.js"
import Section6 from "../../organisms/SectionContents/6.js"
import Section7 from "../../organisms/SectionContents/7.js"
import Section8 from "../../organisms/SectionContents/8.js"

// Import vars
import { reviews, navitems, heroitems, sociallinks, companyinfo, logos, section0_contents, section1_contents, section2_contents, section3_contents, section4_contents, section5_contents, section5_button, section6_contents, section7_contents, section8_contents } from './query';

// Rendering of all active organisms
class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <Intro logo={logos[0].light} navitems={navitems} heroitems={heroitems} sociallinks={sociallinks}/>
        <Section sectionid="why" background="BLUE" data-id="0"><Section0 content={section0_contents}/></Section>
        <Section sectionid="individual" background="LIGHTBLUE" data-id="1"><Section1 content={section1_contents}/></Section>
        <Section sectionid="experts" background="WHITE" data-id="2"><Section2 content={section2_contents}/></Section>
        <Section sectionid="lab" background="LIGHTBLUE" data-id="3"><Section3 content={section3_contents}/></Section>
        <Section sectionid="method" background="GREY" data-id="4"><Section4 content={section4_contents}/></Section>
        <Section sectionid="quotes" background="LIGHTGREY" data-id="5"><Section5 content={section5_contents} btn={section5_button}/></Section>
        <Section sectionid="reviews" background="BLUE" data-id="6"><Section6 content={section6_contents} reviews={reviews}/></Section>
        <Section sectionid="pricing" background="LIGHTBLUE" data-id="7"><Section7 content={section7_contents}/></Section>
        <Section sectionid="about" background="WHITE" data-id="8"><Section8 content={section8_contents}/></Section>
        <Footer sociallinks={sociallinks} companyinfo={companyinfo} logo={logos[0].dark}/>
      </main>
    );
  }
}

export default Homepage;
