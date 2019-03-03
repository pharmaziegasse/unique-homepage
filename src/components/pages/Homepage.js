// standard libs

// other libs
import React, { Component } from "react";

// standard components

// other components
import logo from "./logo.svg";

// organisms


// Rendering of all active organisms
class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <header className="Homepage-header">
          <img src={logo} className="Homepage-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> or <code>src/components/*</code> and
            save to reload.
          </p>
          <a
            className="Homepage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    );
  }
}

export default Homepage;