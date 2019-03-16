// standard libs

// other libs
import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
//import { Query } from "react-apollo"; /* Not used yet */

// standard components

// organisms
import Intro from "../../organisms/Intro";
import Section from "../../organisms/Section";
import Footer from "../../organisms/Footer";

import Modal from "../../organisms/Modal";

// section content organisms
import Section0 from "../../organisms/SectionContents/0.js";
import Section1 from "../../organisms/SectionContents/1.js";
import Section2 from "../../organisms/SectionContents/2.js";
import Section3 from "../../organisms/SectionContents/3.js";
import Section4 from "../../organisms/SectionContents/4.js";
import Section5 from "../../organisms/SectionContents/5.js";
import Section6 from "../../organisms/SectionContents/6.js";
import Section7 from "../../organisms/SectionContents/7.js";
import Section8 from "../../organisms/SectionContents/8.js";

// Replace with CMS!
import logo_dark from "./black.png";
import logo_light from "./white.png";
import icon1 from "./icon1.gif";
import icon2 from "./icon2.gif";
import icon3 from "./icon3.gif";
import section1_img from "./section1.jpg";
import section2_img from "./section2.jpg";
import section3_img from "./section3.jpg";
import section8_img from "./section8.jpg";

// Import vars
import {
  navitems,
  section5_button,
} from "./legacy";


export const sociallinks = [
  { fb: "https://www.facebook.com/Friends-of-Pharmaziegasse-309175709736059/", ig: "https://www.instagram.com/friendsofpharmaziegasse/" }
];

export const companyinfo = [
  {
    city: "Klagenfurt",
    zip: "9020",
    address: "Pharmaziegasse 5",
    phone: "+43 463 45 904-0",
    email: "office@theuniquestory.com",
    copyrightholder: "TheUniqueStory"
  }
];

export const logos = [{ light: logo_light, dark: logo_dark }];

const CMSFetchQuery = gql`
  query homepage {
    homepage {
      id
      title
      token
      city
      zipCode
      address
      telephone
      telefax
      vatNumber
      taxId
      courtOfRegistry
      placeOfRegistry
      tradeRegisterNumber
      ownership
      email
      sociallinks
      headers {
        ... on HeaderBlock {
          value
        }
      }
      sections {
        ... on SectionBlock {
          value
        }
      }
      footers {
        ... on FooterBlock {
          value
        }
      }
    }
  }
`;

/* LOCK */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  //console.log(query)//"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  //console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    //console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

// Rendering of all active organisms
class Homepage extends Component {
  renderContent() {
    var data = this.props.data;

    console.log(data);

    // Modal Register
    let modalRegister_content = {
      title: "Registrieren", lead: "<p>Starten Sie mit Ihrem individuellen und natürlichen Beautyprogramm</p>", step1: "<p>Mit Schritt 1 Ihres Beautyprogrammes</p>", newsletter: "<p><b>HALTEN SIE MICH AM LAUFENDEN - </b><br>ich möchte persönliche News von Pharmaziegasse erhalten</p>"
    }

    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error :(</p>;

    const homepage = data.homepage[0];
    const q_headers = homepage.headers;
    const q_sections = homepage.sections;
    const q_footers = homepage.footers;

    //return data.homepage.map(cms => {
    //console.log(homepage);
    //console.log(data.homepage[1].headers[0].value.hero[0].value.head);
    if (getQueryVariable("token") === homepage.token) {
      // Rendering of all active organisms
      return (
        <main className="Homepage">
          {q_headers.map((headers, i) => {
            let returnparam;
            if (headers.value.hero) {
              returnparam = (
                <Intro
                  key={i}
                  logos={logos}
                  navitems={navitems}
                  theme="L"
                  heroitems={headers.value.hero.map((hero, i) => {
                    return {
                      img: "https://erebos.xyz/user/Toko/bg" + i + ".jpg",
                      head: hero.value.head,
                      subhead: hero.value.subhead,
                      btntext: "Beautyprogramm starten",
                      btnhref: "/start"
                    };
                  })}
                  sociallinks={sociallinks}
                />
              );
            }
            return (returnparam);
          })}
          {q_sections.map((sections, i) => {
            if (sections.value.why) {
              return (
                <Section key={i} sectionid="why" background="BLUE" data-id="0">
                  <Section0
                    content={[
                      { heading: sections.value.why.head },
                      {
                        icon: icon1,
                        text: sections.value.why.collum_1.paragraph
                      },
                      {
                        icon: icon2,
                        text: sections.value.why.collum_2.paragraph
                      },
                      {
                        icon: icon3,
                        text: sections.value.why.collum_3.paragraph
                      },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      }
                    ]}
                  />
                </Section>
              );
            } else if (sections.value.individual) {
              //console.log(sections.value.individual);
              return (
                <Section
                  key={i} 
                  sectionid="individual"
                  background="LIGHTBLUE"
                  data-id="1"
                >
                  <Section1
                    content={[
                      { heading: sections.value.individual.head },
                      { img: section1_img },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.value.individual.lead },
                      { paragraph: sections.value.individual.paragraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.value.experts) {
              return (
                <Section key={i} sectionid="experts" background="WHITE" data-id="2">
                  <Section2
                    content={[
                      { heading: sections.value.experts.head },
                      { img: section2_img },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.value.experts.lead },
                      { paragraph: sections.value.experts.paragraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.value.lab) {
              return (
                <Section key={i} sectionid="lab" background="LIGHTBLUE" data-id="3">
                  <Section3
                    content={[
                      {
                        heading: sections.value.lab.head
                      },
                      { img: section3_img },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.value.lab.lead },
                      { paragraph: sections.value.lab.paragraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.value.method) {
              //console.log(sections.value.method.sphere_1.step);
              return (
                <Section key={i} sectionid="method" background="GREY" data-id="4">
                  <Section4
                    content={[
                      { heading: "Wie funktioniert es?" },
                      { btntext: "Beautyprogramm starten", btnhref: "/start" },
                      {
                        text: sections.value.method.sphere_1.step,
                        href: "#"
                      },
                      {
                        text: sections.value.method.sphere_2.step,
                        href: "#"
                      },
                      {
                        text: sections.value.method.sphere_3.step,
                        href: "#"
                      },
                      {
                        text: sections.value.method.sphere_4.step,
                        href: "#"
                      }
                    ]}
                  />
                </Section>
              );
            } else if (sections.value.quotes) {
              return (
                <Section key={i} sectionid="quotes" background="LIGHTGREY" data-id="5">
                  <Section5
                    content={sections.value.quotes.map((quotes,i) => {
                      return {
                        title: quotes.value.head,
                        text: quotes.value.quote
                      };
                    })}
                    btn={section5_button}
                  />
                </Section>
              );
            } else if (sections.value.reviews) {
              return (
                <Section key={i} sectionid="reviews" background="BLUE" data-id="6">
                  <Section6
                    heading={sections.value.reviews.head}
                    users={sections.value.reviews.users.map((user, index) => {
                      return {
                        name: user.value.name,
                        img:
                          "https://mdbootstrap.com/img/Photos/Avatars/img%20(" +
                          (32 - index) +
                          ").jpg",
                        quote: user.value.quote,
                        info: user.value.info
                      };
                    })}
                  />
                </Section>
              );
            } else if (sections.value.pricing) {
              return (
                <Section key={i} sectionid="pricing" background="LIGHTBLUE" data-id="7">
                  <Section7 
                    heading={sections.value.pricing.head}
                    cards={sections.value.pricing.cards.map((card, index) => {
                      return {
                        title: card.value.title,
                        description: card.value.description,
                        price: card.value.price
                      };
                    })} 
                  
                  />
                </Section>
              );
            } else if (sections.value.about) {
              return (
                <Section key={i} sectionid="about" background="WHITE" data-id="8">
                  <Section8
                    content={[
                      { heading: sections.value.about.head },
                      { img: section8_img },
                      { paragraph: sections.value.about.paragraph }
                    ]}
                  />
                </Section>
              );
            }
            return (
              <Modal
                data={modalRegister_content}
              />
            );
          })}
          {q_footers.map((footers, i) => {
            //console.log(footers.value.info);
            let returnparam;
            if (footers.value.info) {
              returnparam = (
                <Footer key={i}
                  sociallinks={sociallinks}
                  companyinfo={companyinfo}
                  logo={logos[0].dark}
                />
              );
            }
            return (returnparam);
          })}
        </main>
      );
    } else {
      return (
        <main className="Homepage">
          <div className="h-100">
            <div className="flex-center flex-column">

              <h1 className="animated fadeIn mb-4 red-text"><i class="fas fa-exclamation-triangle"></i></h1>
              <h5 className="animated fadeIn mb-3">Not authorized.</h5>

              <p className="animated fadeIn text-muted">Please proceed with token.</p>
            </div>
          </div>
        </main>
      );
    }
  }
  render() {
    return this.renderContent();
  }
}

export default graphql(CMSFetchQuery)(Homepage);
