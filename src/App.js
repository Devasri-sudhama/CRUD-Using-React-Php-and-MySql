import logo from "./logo.svg";
import "./App.css";
import "./styles/table.css";
import "./styles/footer.css";
import "./styles/main.css";

import React, { Component } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/";
import Main from "./components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Main />

        <Footer />
      </div>
    );
  }
}

export default App;
