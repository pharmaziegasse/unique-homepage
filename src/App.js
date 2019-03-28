// Subscribe to PewDiePie - https://www.youtube.com/user/PewDiePie?sub_confirmation=1
// Developed for Pharmaziegasse by Aichner Christian and Kleber Florian for terms of use have a look at the LICENSE file

// Commands we used to get started with this project
// npm install node-sass classnames react-scripts apollo-boost react-apollo graphql --save
// npx create-react-app unique-homepage

// To get all dependencies: npm install

// Standard libs

// Other libs 
import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Standard components
import "./mdb/scss/mdb.scss";
import "./App.scss";

// Other components

// Pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Privacy from "./components/pages/Privacy";

// Apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://test.pharmaziegasse.at/api/graphql" }),
  cache: new InMemoryCache()
});

// Rendering of all active pages
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Router>
      </ApolloProvider>
    );
  }
}

// Exporting of App (all active pages)
export default App;
