import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
