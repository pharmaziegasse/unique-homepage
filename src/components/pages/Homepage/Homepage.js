// standard libs

// other libs
import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { RingLoader } from 'react-spinners';
//import { Query } from "react-apollo"; /* Not used yet */

// standard components

// basic organisms
import Intro from "../../organisms/Intro";
import Section from "../../organisms/Section";
import Footer from "../../organisms/Footer";

// modals
import RegisterModal from "../../organisms/Modal";
import CookieModal from "../../organisms/CookieModal";

// section content organisms
import HomeSWhyBlock from "../../organisms/SectionContents/why.js";
import HomeSIndividualBlock from "../../organisms/SectionContents/individual.js";
import HomeSExpertsBlock from "../../organisms/SectionContents/experts.js";
import HomeSLabBlock from "../../organisms/SectionContents/lab.js";
import HomeSMethodBlock from "../../organisms/SectionContents/method.js";
import HomeSServicesBlock from "../../organisms/SectionContents/services.js";
import HomeSReviewsBlock from "../../organisms/SectionContents/reviews.jsx";
import HomeSPricingBlock from "../../organisms/SectionContents/pricing.js";
import HomeSAboutBlock from "../../organisms/SectionContents/about.js";
// Beta state blocks
import HomeSGalleryBlock from "../../organisms/SectionContents/gallery";
import HomeSFacebookBlock from "../../organisms/SectionContents/facebook";

import logo_dark from "./black.png";
import logo_light from "./white.png";

// Import vars
import {
  navitems,
  reviewImages
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
        ... on StringBlock{
          value
        }
      }
      ownership
      email
      headers{
        ... on HomeHero_SlideBlockListBlock{
          value{
            slideHead
            slideSubhead
            slideImage{
              urlLink
            }
            slideButton{
              buttonTitle
              buttonPage{
                id
                urlPath
              }
            }
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

// Image query
/*const CMSFetchQuery_IMAGES = gql`
  query img($id: Int!){
    image(id: $id){
      urlLink
    }
  }
`;*/

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

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

// Rendering of all active organisms
class Homepage extends Component {

  renderContent() {
    var data = this.props.data;

    console.log(data);

    if (data.loading) {
      return(
        <div className="h-100">
          <div className="flex-center flex-column">
            <RingLoader
              sizeUnit={"px"}
              size={50}
              color={'#9dbdd6'}
            />
            <span className="mt-3">Loading your experience...</span>
          </div>
        </div>
      );
    }
    if (data.error) {
      console.error(data.error);
      return (
        <div className="h-100">
          <div className="flex-center flex-column">
            <h1 className="animated fadeIn mb-4 orange-text"><i className="fas fa-exclamation-triangle"></i></h1>
            <h5 className="animated fadeIn mb-3">Error!</h5>
            <p className="animated fadeIn text-muted">An error occurred!</p>
          </div>
        </div>
      );
    }

    const homepage = data.pages[0];
    const q_headers = homepage.headers;
    const q_sections = homepage.sections;
    const q_footers = homepage.footers;

    const btn_pages = [];
    if (getQueryVariable("token") === homepage.token) {
      // Rendering of all active organisms
      
      return (
        <main className="Homepage">

          {q_headers.map((slides, i) => {
            
            return(
              <Intro
                  key={i}
                  logos={logos}
                  navitems={navitems}
                  theme="L"
                  heroitems={slides.value.map((slide, i) => {
                    btn_pages.push(slide.slideButton.buttonPage.id);
                    return {
                      img: APIHost+slide.slideImage.urlLink,
                      head: slide.slideHead,
                      subhead: slide.slideSubhead,
                      btntext: "Beautyprogramm starten",
                      btnhref: "/start"
                    };
                  })}
                  sociallinks={[{fb:homepage.sociallinks[0].value,ig:homepage.sociallinks[1].value}]}
                />
            )
          
          })}
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
                        img: reviewImages[index],
                        quote: review.value.review_quote,
                        info: review.value.review_info,
                      };
                    })}
                  />
                </Section>
              );
            } /*else if (true) {
              return(
                <Section sectionid="gallery" background="LIGHTGREY">
                  <HomeSGalleryBlock />
                </Section>
              );
            }*/ else if (sections.__typename === 'Home_S_PricingBlock') {
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
        
          <Section sectionid="gallery" background="LIGHTGREY">
            <HomeSGalleryBlock />
          </Section>
          <Section sectionid="facebook" background="LIGHTBLUE">
            <HomeSFacebookBlock />
          </Section>
    
          {q_footers.map((footers, i) => {
            let returnparam;
            if (footers.__typename === "Home_F_InfoBlock") {
              returnparam = (
                <Footer key={i}
                  sociallinks={[{fb:homepage.sociallinks[0].value,ig:homepage.sociallinks[1].value}]}
                  companyinfo={[{zip: homepage.zipCode, address: homepage.address, city: homepage.city, phone: homepage.telephone, email: homepage.email }]}
                  logo={logos[0].dark}
                />
              );
            }
            return (
              returnparam
              );
          })}
          
          {btn_pages.unique().map((id, i) => {
            return(
              <RegisterModal
                key={i}
                pageid={id}
              />
            )
          })},
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
