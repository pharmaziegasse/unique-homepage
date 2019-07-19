import { gql } from "apollo-boost";

//** Static Files */
import logo_dark from "./black.png";
import logo_light from "./white.png";

//** Navigation Items */
export const navitems = [
  { href: "#why", text: "Warum PHARMAZIEGASSE<sup>®</sup>?", active: false, type: "text" },
  { href: "#steps", text: "So funktioniert's", active: false, type: "text" },
  { href: "#pricing", text: "Preise", active: false, type: "text" },
  { href: "#about", text: "Über uns", active: false, type: "text" },
  { href: "#registration", text: "Loslegen", active: false, type: "button" }
];

export const logos = [{ light: logo_light, dark: logo_dark }];

export const CMSFetchQuery_PAGES = gql`
query pages($token: String!) {
  page: root(token: $token) {
    rootPage{
      title
      uniquepage{
        __typename
        id
        whatsappTelephone
        whatsappContactline
        token
        title
        city
        zipCode
        privacy
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
            individualFooter
            individualParagraph
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
          }
          ... on Home_S_ExpertsBlock {
            __typename
            expertsFooter
            expertsHead
            expertsBackground
            expertsDisplayhead
            expertsParagraph
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
          ... on Home_S_FeaturesBlock{
            __typename
            featuresBackground
            featuresHead
            featuresSubhead
            featuresFeatures
            featuresDisplayhead
            featuresDisplaysubhead
            featuresButton{
              buttonLink
              buttonTitle
              buttonPage{
                urlPath
              }
            }
          }
          ... on Home_S_ManifestBlock{ 
          	manifestHead
            manifestImage{
              urlLink
            }
            manifestParagraph
            manifestBackground
          }
          ... on Home_S_StepsBlock{
            __typename
            stepsUseSimpleDesign
            stepsBackground
            stepsHead
            stepsSubhead
            stepsDisplayhead
            stepsSteps
            stepsButton{
              buttonLink
              buttonTitle
              buttonPage{
                urlPath
              }
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
            __typename
            facebookHead
            facebookDisplayhead
            facebookBackground
            facebookUrls
          }
          ... on Home_S_InstagramBlock{
            __typename
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
} 
`;
