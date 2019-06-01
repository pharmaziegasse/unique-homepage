//import { ApolloClient } from "apollo-client";
//import { HttpLink } from "apollo-link-http";
//import { InMemoryCache } from "apollo-cache-inmemory";
//import gql from "graphql-tag";
//import { graphql } from "react-apollo";

// Replace with CMS!
import logo_dark from "../components/pages/Homepage/dark.png";
import logo_light from "../components/pages/Homepage/light.png";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import pic4 from "./4.jpg";

/*
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://thedifferent.at/api/graphql" }),
  cache: new InMemoryCache()
});
*/

/*
var cms_data = ["a"];

export const CMSFetchData = client
  .query({
    query: gql`
      query articles {
        articles {
          header {
            ... on HeadingBlock {
              value
            }
          }
          main {
            ... on ParagraphBlock {
              value
            }
          }
          footer {
            ... on HeadingBlock {
              value
            }
          }
        }
      }
    `
  })
  .then(result => {
    let homepage = result.data.articles[0];
    console.log(homepage.header);
    console.log(homepage.main);
    console.log(homepage.footer);
  });
*/
//var cms_resolved = cms_data.map(a => a);

//console.log(cms_data[0]);

/*
const query = gql`
  query articles {
    articles {
      header {
        ... on HeadingBlock {
          value
        }
      }
      main {
        ... on ParagraphBlock {
          value
        }
      }
      footer {
        ... on HeadingBlock {
          value
        }
      }
    }
  }
`;

class CMSfetch {
  displayDaten() {
    var data = this.props.dat;
    console.log("fak");
    return data;
  }
}

export default (lol = graphql(query)(CMSfetch));
*/

/* Later to be replaced with headless CMS content */
export const navitems = [
  { href: "#why", text: "Warum PHARMAZIEGASSE<sup>®</sup>?", active: false, type: "text" },
  {
    href: "#method",
    text: "Wie funktioniert es?",
    active: false,
    type: "text"
  },
  { href: "#pricing", text: "Preise", active: false, type: "text" },
  { href: "#about", text: "Über uns", active: false, type: "text" },
  { href: "/getting-started", text: "Loslegen", active: false, type: "button" }
];
export const logos = [{ light: logo_light, dark: logo_dark }];

export const reviewImages = [pic1,pic2,pic3,pic4]
