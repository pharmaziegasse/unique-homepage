//** Standard Frameworks */
import React, { Component, lazy, Suspense } from "react";

//** Additional Frameworks */
/** Apollo */
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
/** Loaders */
import { RingLoader } from 'react-spinners';

//** Components */
//** Organisms */
import Loader from "../../organisms/Loader";
import Intro from "../../organisms/Intro";

//** Import static values */
import { navitems, logos } from "../../../static";
import { APIHost } from "../../../App";

//** Custom SCSS  */
import "./Homepage.scss";

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
      copyrightholder
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
              buttonLink
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
          infoBackground
        }
      }
      sections {
      	... on Home_S_WhyBlock {
          __typename
          whyBackground
          whyDisplayhead
          whyHead
          whyButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
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
          individualDisplayhead
          individualBackground
          individualLead
          individualImage{
            urlLink
          }
          individualButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
            id
          }
          individualParagraph
        }
        ... on Home_S_ExpertsBlock {
          __typename
          expertsHead
          expertsBackground
          expertsDisplayhead
          expertsLead
          expertsImage{
            urlLink
          }
          expertsButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
            id
          }
          expertsParagraph
        }
        ... on Home_S_LabBlock {
          __typename
          labHead
          labLead
          labBackground
          labDisplayhead
          labImage{
            urlLink
          }
          labButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
            id
          }
          labParagraph
        }
        ... on Home_S_MethodBlock {
          __typename
          methodHead
          methodDisplayhead
          methodBackground
          methodButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
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
          servicesBackground
          servicesServices
          servicesButton{
            buttonLink
            buttonTitle
            buttonPage{
              id
              urlPath
            }
            id
          }
        }
        ... on Home_S_ReviewsBlock {
          __typename
          reviewsHead
          reviewsDisplayhead
          reviewsBackground
          reviewsReviews
        }
        ... on Home_S_PricingBlock {
          __typename
          pricingHead
          pricingBackground
          pricingDisplayhead
          pricingPricingcards
        }
        ... on Home_S_AboutBlock {
          __typename
          aboutHead
          aboutDisplayhead
          aboutBackground
          aboutImage{
            urlLink
          }
          aboutParagraph
        }
        ... on Home_S_FacebookBlock{
          facebookHead
          facebookDisplayhead
          facebookBackground
          facebookUrls
        }
        ... on Home_S_InstagramBlock{
          instagramHead
          instagramDisplayhead
          instagramBackground
          instagramCaptions
          instagramUrls
        }
      }
    }
  }
}
`;
/*
//** Image query
/*const CMSFetchQuery_IMAGES = gql`
  query img($id: Int!){
    image(id: $id){
      urlLink
    }
  }
`;*/

const Section = lazy(() => import("../../organisms/Section"));
const Footer = lazy(() => import("../../organisms/Footer"));

//** Modals */
const ContentModal = lazy(() => import("../../organisms/ContentModal"));
const AboutModal = lazy(() => import("../../organisms/Modals/about"));
const PrivacyModal = lazy(() => import("../../organisms/Modals/privacy"));
const RegisterModal = lazy(() => import("../../organisms/Modals/register"));
const CookieModal = lazy(() => import("../../organisms/Modals/cookie"));

//** Section Blocks */
const HomeSWhyBlock = lazy(() => import("../../organisms/SectionContents/why.js"));
const HomeSIndividualBlock = lazy(() => import("../../organisms/SectionContents/individual.js"));
const HomeSExpertsBlock = lazy(() => import("../../organisms/SectionContents/experts.js"));
const HomeSLabBlock = lazy(() => import("../../organisms/SectionContents/lab.js"));
const HomeSMethodBlock = lazy(() => import("../../organisms/SectionContents/method.js"));
const HomeSServicesBlock = lazy(() => import("../../organisms/SectionContents/services.js"));
const HomeSReviewsBlock = lazy(() => import("../../organisms/SectionContents/reviews.jsx"));
const HomeSPricingBlock = lazy(() => import("../../organisms/SectionContents/pricing.js"));
const HomeSAboutBlock = lazy(() => import("../../organisms/SectionContents/about.js"));
const HomeSGalleryBlock = lazy(() => import("../../organisms/SectionContents/gallery"));
const HomeSFacebookBlock = lazy(() => import("../../organisms/SectionContents/facebook"));

//** LOCK */
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

//** Rendering of all active organisms */
class Homepage extends Component {

  //** Get all the unique values of array */
  getUnique = (a) => {
    var arr = [];
    for(var i = 0; i < a.length; i++) {
        if(!arr.includes(a[i])) {
            arr.push(a[i]);
        }
    }
    return arr; 
  }

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
            <p className="animated fadeIn text-muted">An error occurred! We will be back shortly.</p>
          </div>
        </div>
      );
    }

    const homepage = data.pages[0];
    const q_headers = homepage.headers;
    const q_sections = homepage.sections;
    const q_footers = homepage.footers;

    const btn_pages = [];

    if (getQueryVariable("token") === homepage.token || homepage.token === "" || homepage.token === undefined) {
      // Rendering of all active organisms
      
      return (
        <main className="Homepage">

          {q_headers.map((slides, i) => {
            return(
                <Intro
                  key={i}
                  logos={logos}
                  navitems={navitems}
                  theme="D"
                  heroitems={slides.value.map((slide, i) => {
                    btn_pages.push(slide.slideButton.buttonPage.id);
                    return {
                      img: APIHost+slide.slideImage.urlLink,
                      head: slide.slideHead,
                      subhead: slide.slideSubhead,
                      btn: slide.slideButton
                    };
                  })}
                  sociallinks={[{fb:homepage.sociallinks[0].value,ig:homepage.sociallinks[1].value}]}
                />
            )
          
          })}
          {q_sections.map((sections, i) => {
            if (sections.__typename === 'Home_S_WhyBlock') {
              return (
                <Suspense key={i}  fallback={<Loader/>}>
                  <Section sectionid="why" background={sections.whyBackground} data-id="0">
                    <Suspense fallback={<Loader/>}>
                      <HomeSWhyBlock
                          showHead = { sections.whyDisplayhead }
                          btn = { sections.whyButton }
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
                            }
                          ]}
                        />
                      </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_IndividualBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section
                    sectionid="individual"
                    background={sections.individualBackground}
                    data-id="1"
                  >
                    <Suspense fallback={<Loader/>}>
                      <HomeSIndividualBlock
                        showHead={ sections.individualDisplayhead }
                        btn = { sections.individualButton }
                        content={[
                          { heading: sections.individualHead },
                          { img: APIHost+sections.individualImage.urlLink },
                          { lead: sections.individualLead },
                          { paragraph: sections.individualParagraph }
                        ]}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_ExpertsBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="experts" background={sections.expertsBackground} data-id="2">
                    <Suspense fallback={<Loader/>}>
                      <HomeSExpertsBlock
                        showHead={sections.expertsDisplayhead}
                        btn = { sections.expertsButton }
                        content={[
                          { heading: sections.expertsHead },
                          { img: APIHost+sections.expertsImage.urlLink },
                          { lead: sections.expertsLead },
                          { paragraph: sections.expertsParagraph }
                        ]}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_LabBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="lab" background={sections.labBackground} data-id="3">
                    <Suspense fallback={<Loader/>}>
                      <HomeSLabBlock
                        showHead={sections.labDisplayhead}
                        btn = { sections.labButton }
                        content={[
                          {
                            heading: sections.labHead
                          },
                          { img: APIHost+sections.labImage.urlLink },
                          { lead: sections.labLead },
                          { paragraph: sections.labParagraph }
                        ]}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_MethodBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="method" background={sections.methodBackground} data-id="4">
                    <Suspense fallback={<Loader/>}>
                      <HomeSMethodBlock
                        showHead={sections.methodDisplayhead}
                        btn = { sections.methodButton }
                        content={[
                          { heading: sections.methodHead },
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
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_ServicesBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="quotes" background={sections.servicesBackground} data-id="5">
                    <Suspense fallback={<Loader/>}>
                      <HomeSServicesBlock
                        content={sections.servicesServices.map((service,i) => {
                          return {
                            title: service.value.service_head,
                            text: service.value.service_content
                          };
                        })}
                        btn = {sections.servicesButton}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_ReviewsBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="reviews" background={sections.reviewsBackground} data-id="6">
                    <Suspense fallback={<Loader/>}>
                      <HomeSReviewsBlock
                        showHead={sections.reviewsDisplayhead}
                        heading={sections.reviewsHead}
                        users={sections.reviewsReviews.map((review, index) => {
                          return {
                            name: review.value.review_name,
                            img: review.value.review_image,
                            quote: review.value.review_quote,
                            info: review.value.review_info,
                          };
                        })}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } /*else if (true) {
              return(
                <Section sectionid="gallery" background="LIGHTGREY">
                  <HomeSGalleryBlock />
                </Section>
              );
            }*/ else if (sections.__typename === 'Home_S_PricingBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="pricing" background={sections.pricingBackground} data-id="7">
                    <Suspense fallback={<Loader/>}>
                      <HomeSPricingBlock
                        showHead={sections.pricingDisplayhead}
                        heading={sections.pricingHead}
                        cards={sections.pricingPricingcards.map((card, index) => {
                          return {
                            title: card.value.pricingcard_title,
                            description: card.value.pricingcard_description,
                            price: card.value.pricingcard_price,
                          };
                        })} 
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_AboutBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="about" background={sections.aboutBackground} data-id="8">
                    <Suspense fallback={<Loader/>}>
                      <HomeSAboutBlock
                        showHead={sections.aboutDisplayhead}
                        content={[
                          { heading: sections.aboutHead },
                          { img: APIHost+sections.aboutImage.urlLink },
                          { paragraph: sections.aboutParagraph }
                        ]}
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_InstagramBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="gallery" background={sections.instagramBackground}>
                    <Suspense fallback={<Loader/>}>
                      <HomeSGalleryBlock 
                        showHead={sections.instagramDisplayhead}
                        title={sections.instagramHead}
                        captions={sections.instagramCaptions}
                        urls={sections.instagramUrls.map((instagram_post,i) => {
                          return {
                            url: instagram_post.value.instagram_url
                          };
                        })} 
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else if (sections.__typename === 'Home_S_FacebookBlock') {
              return (
                <Suspense key={i} fallback={<Loader/>}>
                  <Section sectionid="facebook" background={sections.facebookBackground}>
                    <Suspense fallback={<Loader/>}>
                      <HomeSFacebookBlock 
                        showHead={sections.facebookDisplayhead}
                        title={sections.facebookHead}
                        urls={sections.facebookUrls.map((facebook_post,i) => {
                          return {
                            url: facebook_post.value.facebook_url
                          };
                        })} 
                      />
                    </Suspense>
                  </Section>
                </Suspense>
              );
            } else {
              return false;
            }
          })}
          {q_footers.map((footers, i) => {
            let returnparam;
            if (footers.__typename === "Home_F_InfoBlock") {
              returnparam = (
                <Suspense key={i} fallback={<Loader/>}>
                  <Footer 
                    background={footers.infoBackground}
                    sociallinks={[{fb:homepage.sociallinks[0].value,ig:homepage.sociallinks[1].value}]}
                    companyinfo={[{zip: homepage.zipCode, address: homepage.address, city: homepage.city, phone: homepage.telephone, email: homepage.email, copyrightholder: homepage.copyrightholder }]}
                    logo={logos[0].dark}
                  />
                </Suspense>
              );
            }
            return (
              returnparam
              );
          })}
          {this.getUnique(btn_pages).map((id, i) => {
            return(
              <Suspense key={i} fallback={<div></div>}>
                <RegisterModal
                  pageid={id}
                />
              </Suspense>
            )
          })}
          <div>
            <Suspense fallback={<div></div>}>
              <CookieModal/>
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<div></div>}>
              <ContentModal
                modaldata = {[{modalId: "aboutModal", modalTitle: "Impressum", modalLabel: "Impressum"}]}
              >
                <AboutModal/>
              </ContentModal>
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<div></div>}>
              <ContentModal
                modaldata={[{modalId: "privacyModal", modalTitle: "Datenschutzerklärung", modalLabel: "Datenschutz"}]}
              >
                <PrivacyModal/>
              </ContentModal>
            </Suspense>
          </div>
          
          
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
