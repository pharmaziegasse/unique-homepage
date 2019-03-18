// Subscribe to PewDiePie - https://www.youtube.com/user/PewDiePie?sub_confirmation=1
// Developed for TheUniqueStory by Aichner Christian and Kleber Florian for terms of use have a look at the LICENSE file

// Commands we used to get started with this project
// npm install node-sass classnames react-scripts apollo-boost react-apollo graphql --save
// npx create-react-app unique-homepage

// To get all dependencies: npm install

// standard libs

// other libs
import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

// standard components
import "./mdb/scss/mdb.scss";
import "./App.scss";

// other components
//import "./App.scss";

// pages
import Homepage from "./components/pages/Homepage/Homepage";

// apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://pharmaziegasse.at/api/graphql" }),
  cache: new InMemoryCache()
});

// Rendering of all active pages
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Homepage />
      </ApolloProvider>
    );
  }
}

// Exporting of App (all active pages)
export default App;
