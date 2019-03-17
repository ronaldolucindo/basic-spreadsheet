import React, { Component } from "react";

import Store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
        <Store>
          <Header />
          <Table cols="2" rows="10" />

          <Footer />
        </Store>
    );
  }
}

export default App;
