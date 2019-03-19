import React, { Component } from "react";
// Apollo
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

// Get page content
import Content from "./Homepage.js";

// Apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://pharmaziegasse.at/api/graphql" }),
  cache: new InMemoryCache()
});

// Rendering of all active pages
class Homepage extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Content />
      </ApolloProvider>
    );
  }
}

// Exporting of App (all active pages)
export default Homepage;
