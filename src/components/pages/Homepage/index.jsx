//** Standard Frameworks */
import React, { Component, lazy, Suspense } from "react";

//** Additional Frameworks */
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

const Section = lazy(() => import("../../organisms/Section"));
const Footer = lazy(() => import("../../organisms/Footer"));

//** Modals */
const ContentModal = lazy(() => import("../../organisms/ContentModal"));
const AboutModal = lazy(() => import("../../organisms/Modals/about"));
const PrivacyModal = lazy(() => import("../../organisms/Modals/privacy"));
const RegisterModal = lazy(() => import("../../organisms/Modals/register"));
const CookieModal = lazy(() => import("../../organisms/Modals/cookie"));
const PaymentModal = lazy(() => import("../../organisms/Modals/payment"));

//** Section Blocks */
const HomeSWhyBlock = lazy(() => import("../../organisms/SectionContents/why.js"));
const HomeSIndividualBlock = lazy(() => import("../../organisms/SectionContents/individual.js"));
const HomeSExpertsBlock = lazy(() => import("../../organisms/SectionContents/experts.js"));
const HomeSLabBlock = lazy(() => import("../../organisms/SectionContents/lab.js"));
const HomeSServicesBlock = lazy(() => import("../../organisms/SectionContents/services.js"));
const HomeSReviewsBlock = lazy(() => import("../../organisms/SectionContents/reviews.jsx"));
const HomeSPricingBlock = lazy(() => import("../../organisms/SectionContents/pricing.js"));
const HomeSAboutBlock = lazy(() => import("../../organisms/SectionContents/about.js"));
const HomeSGalleryBlock = lazy(() => import("../../organisms/SectionContents/gallery"));
const HomeSFacebookBlock = lazy(() => import("../../organisms/SectionContents/facebook"));
const HomeSFeaturesBlock = lazy(() => import("../../organisms/SectionContents/features"));
const HomeSStepsBlock = lazy(() => import("../../organisms/SectionContents/steps"));
const HomeSManifestBlock = lazy(() => import("../../organisms/SectionContents/manifest"));

//** Get access token from URL */
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

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: undefined
        }
    }

    componentDidMount(){
        if(this.state.data === undefined){
            if(this.props.data !== undefined){
                this.setState({data: this.props.data});
            }
        }
    }

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
    if(this.state.data !== undefined){
        var data = this.state.data;
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

        
        if(data.page === undefined){
            console.log("OMG ITS UNDEFINED");
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
            )
        }

        //** Debug data fetched from Wagtail */
        //console.log(data.pages);

        const homepage = data.page.rootPage.uniquepage;
        const q_headers = homepage.headers;
        const q_sections = homepage.sections;  

        const btn_pages = [];

        if (getQueryVariable("token") === homepage.token || homepage.token === "" || homepage.token === undefined || homepage.token === null) {
        // Rendering of all active organisms
        
        return (
            <main className="Homepage">

            {q_headers.map((slides, i) => {
                return(
                    <Intro
                    key={i}
                    logos={logos}
                    navitems={navitems}
                    heroitems={slides.value.map((slide, i) => {
                        btn_pages.push(slide.slideButton.buttonPage);
                        return {
                        img: APIHost+slide.slideImage.urlLink,
                        head: slide.slideHead,
                        subhead: slide.slideSubhead,
                        btn: slide.slideButton
                        };
                    })}
                    sociallinks={[{fb:homepage.sociallinks.value,ig:homepage.sociallinks[1].value}]}
                    />
                )
            
            })}
            {q_sections.map((sections, i) => {
                if (sections.__typename === 'Home_S_WhyBlock') {
                return (
                    <Suspense key={i}  fallback={<Loader/>}>
                    <Section sectionid="why" background={sections.whyBackground}>
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
                        <Section sectionid="individual" background={sections.individualBackground}>
                            <Suspense fallback={<Loader/>}>
                                <HomeSIndividualBlock
                                    showHead={sections.individualDisplayhead}
                                    btn = { sections.individualButton }
                                    heading = { sections.individualHead }
                                    img = { sections.individualImage.urlLink }
                                    footer = { sections.individualFooter }
                                    paragraph = { sections.individualParagraph }
                                />
                            </Suspense>
                        </Section>
                    </Suspense>
                );
                } else if (sections.__typename === 'Home_S_ExpertsBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                        <Section sectionid="experts" background={sections.expertsBackground}>
                            <Suspense fallback={<Loader/>}>
                                <HomeSExpertsBlock
                                    showHead={sections.expertsDisplayhead}
                                    btn = { sections.expertsButton }
                                    heading = { sections.expertsHead }
                                    img = { sections.expertsImage.urlLink }
                                    footer = { sections.expertsFooter }
                                    paragraph = { sections.expertsParagraph }
                                />
                            </Suspense>
                        </Section>
                    </Suspense>
                );
                } else if (sections.__typename === 'Home_S_LabBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                    <Section sectionid="lab" background={sections.labBackground}>
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
                } else if (sections.__typename === 'Home_S_ServicesBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                    <Section sectionid="quotes" background={sections.servicesBackground}>
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
                    <Section sectionid="reviews" background={sections.reviewsBackground}>
                        <Suspense fallback={<Loader/>}>
                        <HomeSReviewsBlock
                            showHead={sections.reviewsDisplayhead}
                            token={this.props.token}
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
                } else if (sections.__typename === 'Home_S_FeaturesBlock') {
                    return (
                        <Suspense key={i} fallback={<Loader/>}>
                        <Section sectionid="features" background={sections.featuresBackground}>
                            <Suspense fallback={<Loader/>}>
                                <HomeSFeaturesBlock
                                    showHead={sections.featuresDisplayhead}
                                    btn={sections.featuresButton}
                                    title={sections.featuresHead}
                                    lead={sections.featuresSubhead}
                                    items={sections.featuresFeatures.map((item, index) => {
                                        return {
                                            icon: item.value.feature_icon,
                                            head: item.value.feature_head,
                                            text: item.value.feature_paragraph
                                        };
                                    })}
                                />
                            </Suspense>
                        </Section>
                        </Suspense>
                    );
                } else if (sections.__typename === 'Home_S_StepsBlock') {
                    return (
                        <Suspense key={i} fallback={<Loader/>}>
                        <Section sectionid="steps" background={sections.stepsBackground}>
                            <Suspense fallback={<Loader/>}>
                                <HomeSStepsBlock
                                    simple={sections.stepsUseSimpleDesign}
                                    showHead={sections.stepsDisplayhead}
                                    btn={sections.stepsButton}
                                    title={sections.stepsHead}
                                    lead={sections.stepsSubhead}
                                    token={this.props.token}
                                    items={sections.stepsSteps.map((item, index) => {
                                        return {
                                            icon: item.value.step_icon,
                                            head: item.value.step_head,
                                            text: item.value.step_paragraph,
                                            img: item.value.step_image
                                        };
                                    })}
                                />
                            </Suspense>
                        </Section>
                        </Suspense>
                    );
                } else if (sections.__typename === 'Home_S_PricingBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                        <Section sectionid="pricing" background={sections.pricingBackground}>
                            <Suspense fallback={<Loader/>}>
                            <HomeSPricingBlock
                                showHead={sections.pricingDisplayhead}
                                heading={sections.pricingHead}
                                cards={sections.pricingPricingcards.map((card, index) => {
                                return {
                                    index: index,
                                    title: card.value.pricingcard_title,
                                    description: card.value.pricingcard_description,
                                    price: card.value.pricingcard_price,
                                };
                                })} 
                            />
                            </Suspense>
                        </Section>
                        {
                            sections.pricingPricingcards.map((card, index) => {
                                return (
                                    <Suspense key={index} fallback={<div></div>}>
                                        <PaymentModal
                                            index={index}
                                            amount={card.value.pricingcard_price}
                                            success_msg={card.value.pricingcard_sucessmsg}
                                            wa_num={homepage.whatsappTelephone}
                                        />
                                    </Suspense>
                                );
                            })
                        }
                    </Suspense>
                );
                } else if (sections.__typename === 'Home_S_AboutBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                    <Section sectionid="about" background={sections.aboutBackground}>
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
                } else if (sections.__typename === 'Home_S_ManifestBlock') {
                return (
                    <Suspense key={i} fallback={<Loader/>}>
                    <Section sectionid="manifest" background={sections.manifestBackground}>
                        <Suspense fallback={<Loader/>}>
                        <HomeSManifestBlock
                            title={sections.manifestHead}
                            paragraph={sections.manifestParagraph}
                            img={sections.manifestImage.urlLink}
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
            <div>
                <Suspense fallback={<Loader/>}>
                    <Footer 
                        background={"#ffffff"}
                        sociallinks={[{fb:homepage.sociallinks.value,ig:homepage.sociallinks[1].value}]}
                        companyinfo={[{zip: homepage.zipCode, address: homepage.address, city: homepage.city, phone: homepage.telephone, email: homepage.email, copyrightholder: homepage.copyrightholder }]}
                        logo={logos[0].dark}
                        wa_text={homepage.whatsappContactline}
                        wa_num={homepage.whatsappTelephone}
                    />
                </Suspense>
            </div>
            {this.getUnique(btn_pages).map((id, i) => {
                return(
                <Suspense key={i} fallback={<div></div>}>
                    <RegisterModal
                        token={this.props.token}
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
    } else {
        return (
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
        )
    }
  }

    render() {
        return this.renderContent();
    }
}

export default Homepage;
