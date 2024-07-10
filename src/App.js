import React, { useState } from "react";
import "./App.css";
import Footer from "./common/Section/Footer";
import Header from "./common/Section/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const initialeState = {
  footerText: "",
};

function App() {
  //const [footerText, setFooterText] = useState("");
  const [state, setState] = useState(initialeState);

  const resetSettings = () => {
    setState(initialeState);
  };

  return (
    <>
      <Router>
        <Header footerText={state.footerText} />
        <Routes>
          <Route path="/"/>
        </Routes>

        <Footer
          setFooterText={(text) => setState({ ...state, footerText: text })}
          resetSettings={resetSettings}
        />
      </Router>
    </>
  );
}

export default App;
