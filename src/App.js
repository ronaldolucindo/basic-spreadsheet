import React from "react";

import Store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <Store>
      <Header />
      <Table />
      <Footer />
    </Store>
  );
}

export default App;
