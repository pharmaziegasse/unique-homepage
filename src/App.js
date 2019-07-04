//** Developed for Pharmaziegasse by Aichner Christian and Kleber Florian for terms of use have a look at the LICENSE file */

//** Commands we used to get started with this project */
//** npm install node-sass classnames react-scripts apollo-boost react-apollo graphql --save */
//** npx create-react-app unique-homepage */

//** To get all dependencies: npm install */

//** Standard Frameworks */
import React, { Component } from "react";

//** Additional Frameworks */
/** Apollo */
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

//** SCSS */
import "./mdb/scss/mdb.scss";
import "./App.scss";

//** Pages */
import Homepage from "./components/pages/Homepage";

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
const APILink = APIHost+"/api/graphql";

//** Apollo client setup */
const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: APILink })
});

//** Rendering of all active pages */
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Homepage />
      </ApolloProvider>
    );
  }
}

//** Exporting of App (all active pages) */
export default App;
