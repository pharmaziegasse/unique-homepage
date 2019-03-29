// standard libs

// other libs
import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
//import { Query } from "react-apollo"; /* Not used yet */

// standard components

// basic organisms
import Intro from "../../organisms/Intro";
import Section from "../../organisms/Section";
import Footer from "../../organisms/Footer";

// modals
import Modal from "../../organisms/Modal";
import CookieModal from "../../organisms/CookieModal";

// section content organisms
import HomeSWhyBlock from "../../organisms/SectionContents/why.js";
import HomeSIndividualBlock from "../../organisms/SectionContents/individual.js";
import HomeSExpertsBlock from "../../organisms/SectionContents/experts.js";
import HomeSLabBlock from "../../organisms/SectionContents/lab.js";
import HomeSMethodBlock from "../../organisms/SectionContents/method.js";
import HomeSServicesBlock from "../../organisms/SectionContents/services.js";
import HomeSReviewsBlock from "../../organisms/SectionContents/reviews.js";
import HomeSPricingBlock from "../../organisms/SectionContents/pricing.js";
import HomeSAboutBlock from "../../organisms/SectionContents/about.js";

import logo_dark from "./black.png";
import logo_light from "./white.png";

// Import vars
import {
  navitems
} from "../../../legacy";

import {
  APIHost
} from "../../../App"

// Custom CSS
import "./Homepage.scss";

export const logos = [{ light: logo_light, dark: logo_dark }];

const CMSFetchQuery_PAGES = gql`
query pages {
  pages {
    id
    title
    ... on HomeUniquePage {
      __typename
      token
      id
      title
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
      sociallinks{
        ... on HomeStructBlock{
          link
        }
      }
      ownership
      email
      headers {
        ... on Home_H_HeroBlock{
          __typename
          heroImage{
            title
            url
            urlLink
          }
          heroHead
          heroSubhead
          heroButton {
            id
          }
        }
      }
      footers {
        ... on Home_F_InfoBlock{
          __typename
          infoPlaceholder
        }
      }
      sections {
      	... on Home_S_WhyBlock {
          __typename
          whyHead
          whyButton{
            id
          }
          whyCollum1{
            collumImage{
              urlLink
            }
            collumParagraph
          }
          whyCollum2{
            collumImage{
              urlLink
            }
            collumParagraph
          }
          whyCollum3{
            collumImage{
              urlLink
            }
            collumParagraph
          }
        }
        ... on Home_S_IndividualBlock {
          __typename
          individualHead
          individualLead
          individualImage{
            urlLink
          }
          individualButton{
            id
          }
          individualParagraph
        }
        ... on Home_S_ExpertsBlock {
          __typename
          expertsHead
          expertsLead
          expertsImage{
            urlLink
          }
          expertsButton{
            id
          }
          expertsParagraph
        }
        ... on Home_S_LabBlock {
          __typename
          labHead
          labLead
          labImage{
            urlLink
          }
          labButton{
            id
          }
          labParagraph
        }
        ... on Home_S_MethodBlock {
          __typename
          methodHead
          methodButton{
            id
          }
          methodSphere1{
            sphereStep
          }
          methodSphere2{
            sphereStep
          }
          methodSphere3{
            sphereStep
          }
          methodSphere4{
            sphereStep
          }
        }
        ... on Home_S_ServicesBlock {
          __typename
          servicesServices
          servicesButton{
            id
          }
        }
        ... on Home_S_ReviewsBlock {
          __typename
          reviewsHead
          reviewsReviews
        }
        ... on Home_S_PricingBlock {
          __typename
          pricingHead
          pricingPricingcards
        }
        ... on Home_S_AboutBlock {
          __typename
          aboutHead
          aboutImage{
            urlLink
          }
          aboutParagraph
        }
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

    const homepage = data.pages[0];
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
                <Intro
                  logos={logos}
                  navitems={navitems}
                  theme="L"
                  heroitems={q_headers.map((hero, i) => {
                    return {
                      img: APIHost+hero.heroImage.urlLink,
                      head: hero.heroHead,
                      subhead: hero.heroSubhead,
                      btntext: "Beautyprogramm starten",
                      btnhref: "/start"
                    };
                  })}
                  sociallinks={[{fb:homepage.sociallinks[0].link,ig:homepage.sociallinks[1].link}]}
                />
          {q_sections.map((sections, i) => {
            if (sections.__typename === 'Home_S_WhyBlock') {
              return (
                <Section key={i} sectionid="why" background="BLUE" data-id="0">
                  <HomeSWhyBlock
                    content={[
                      { heading: sections.whyHead },
                      {
                        icon: APIHost+sections.whyCollum1.collumImage.urlLink,
                        text: sections.whyCollum1.collumParagraph
                      },
                      {
                        icon: APIHost+sections.whyCollum2.collumImage.urlLink,
                        text: sections.whyCollum2.collumParagraph
                      },
                      {
                        icon: APIHost+sections.whyCollum3.collumImage.urlLink,
                        text: sections.whyCollum3.collumParagraph
                      },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      }
                    ]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_IndividualBlock') {
              //console.log(sections.value.individual);
              return (
                <Section
                  key={i} 
                  sectionid="individual"
                  background="LIGHTBLUE"
                  data-id="1"
                >
                  <HomeSIndividualBlock
                    content={[
                      { heading: sections.individualHead },
                      { img: APIHost+sections.individualImage.urlLink },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.individualLead },
                      { paragraph: sections.individualParagraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_ExpertsBlock') {
              return (
                <Section key={i} sectionid="experts" background="WHITE" data-id="2">
                  <HomeSExpertsBlock
                    content={[
                      { heading: sections.expertsHead },
                      { img: APIHost+sections.expertsImage.urlLink },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.expertsLead },
                      { paragraph: sections.expertsParagraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_LabBlock') {
              return (
                <Section key={i} sectionid="lab" background="LIGHTBLUE" data-id="3">
                  <HomeSLabBlock
                    content={[
                      {
                        heading: sections.labHead
                      },
                      { img: APIHost+sections.labImage.urlLink },
                      {
                        btntext: "Beautyprogramm starten",
                        btnhref: "/start"
                      },
                      { lead: sections.labLead },
                      { paragraph: sections.labParagraph }
                    ]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_MethodBlock') {
              //console.log(sections.value.method.sphere_1.step);
              return (
                <Section key={i} sectionid="method" background="GREY" data-id="4">
                  <HomeSMethodBlock
                    content={[
                      { heading: sections.methodHead },
                      { btntext: "Beautyprogramm starten", btnhref: "/start" },
                      {
                        text: sections.methodSphere1.sphereStep,
                        href: "#"
                      },
                      {
                        text: sections.methodSphere2.sphereStep,
                        href: "#"
                      },
                      {
                        text: sections.methodSphere3.sphereStep,
                        href: "#"
                      },
                      {
                        text: sections.methodSphere4.sphereStep,
                        href: "#"
                      }
                    ]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_ServicesBlock') {
              return (
                <Section key={i} sectionid="quotes" background="LIGHTGREY" data-id="5">
                  <HomeSServicesBlock
                    content={sections.servicesServices.map((service,i) => {
                      return {
                        title: service.value.service_head,
                        text: service.value.service_content
                      };
                    })}
                    btn={[{ btntext: "Beautyprogramm starten", btnhref: "/start" }]}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_ReviewsBlock') {
              return (
                <Section key={i} sectionid="reviews" background="BLUE" data-id="6">
                
                  <HomeSReviewsBlock
                  
                    heading={sections.reviewsHead}
                    users={sections.reviewsReviews.map((review, index) => {
                      return {
                        name: review.value.review_name,
                        img: review.value.review_image.urlLink,
                        quote: review.value.review_quote,
                        info: review.value.review_info,
                      };
                    })}
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_PricingBlock') {
              return (
                <Section key={i} sectionid="pricing" background="LIGHTBLUE" data-id="7">
                  <HomeSPricingBlock 
                    heading={sections.pricingHead}
                    cards={sections.pricingPricingcards.map((card, index) => {
                      return {
                        title: card.value.pricingcard_title,
                        description: card.value.pricingcard_description,
                        price: card.value.pricingcard_price,
                      };
                    })} 
                  
                  />
                </Section>
              );
            } else if (sections.__typename === 'Home_S_AboutBlock') {
              return (
                <Section key={i} sectionid="about" background="WHITE" data-id="8">
                  <HomeSAboutBlock
                    content={[
                      { heading: sections.aboutHead },
                      { img: APIHost+sections.aboutImage.urlLink },
                      { paragraph: sections.aboutParagraph }
                    ]}
                  />
                </Section>
              );
            } else {
              return false;
            }
          })}
          {q_footers.map((footers, i) => {
            //console.log(footers.value.info);
            let returnparam;
            if (footers.__typename === "Home_F_InfoBlock") {
              returnparam = (
                <Footer key={i}
                  sociallinks={[{fb:homepage.sociallinks[0].link,ig:homepage.sociallinks[1].link}]}
                  companyinfo={[{zip: homepage.zipCode, address: homepage.address, city: homepage.city, phone: homepage.telephone, email: homepage.email }]}
                  logo={logos[0].dark}
                />
              );
            }
            return (
              returnparam
              );
          })}
          <Modal
            data={modalRegister_content}
          />,
          <CookieModal />
        </main>
      );
    } else {
      return (
        <main className="Homepage">
          <div className="h-100">
            <div className="flex-center flex-column">

              <h1 className="animated fadeIn mb-4 red-text"><i className="fas fa-exclamation-triangle"></i></h1>
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

export default graphql(CMSFetchQuery_PAGES)(Homepage);
