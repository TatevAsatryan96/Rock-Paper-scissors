import React from "react";


import Layout from "./components/Layout/Layout";
import Footer from "./containers/Footer/Footer";
import Game from "./containers/Game/Game";

import "./App.css";

function App() {
  return (
    <div className="App">
     
      <Layout>
        <Game />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;