//** Developed for Pharmaziegasse by Aichner Christian and Kleber Florian for terms of use have a look at the LICENSE file */

//** Commands we used to get started with this project */
//** npm install node-sass classnames react-scripts apollo-boost react-apollo graphql --save */
//** npx create-react-app unique-homepage */

//** To get all dependencies: npm install */

//** Standard Frameworks */
import React, { Component } from "react";

//** React Facebook Pixel */
import ReactPixel from 'react-facebook-pixel';

//** Additional Frameworks */
/** Apollo */
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

//** SCSS */
import "./App.scss";

//** Pages */
import Auth from "./components/organisms/Auth";

//** Base link */
export const APIHost = 'https://pharmaziegasse.at';

//** Cache setup */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [], //** no types provided - works */
    },
  },
});
const cache = new InMemoryCache({ fragmentMatcher });

//** Creating API Link from Host */
const APILink = APIHost+"/api/graphiql";

//** Apollo client setup */
const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: APILink })
});

//** React FB Pixel config */

const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
};

let email = localStorage.getItem('f_e');
// If a user has already registered
if(email !== undefined && email !== null){
  const advancedMatching = { em: email }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
  ReactPixel.init('398871454084167', advancedMatching, options); // Init Pixel with advanced options
} else {
  ReactPixel.init('398871454084167', options);
}

ReactPixel.pageView(); 

//** Rendering of all active pages */
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Auth pixel={ReactPixel} />
      </ApolloProvider>
    );
  }
}

//** Exporting of App (all active pages) */
export default App;
