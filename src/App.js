import React, { useState } from "react";
import "./App.css";
import Footer from "./common/Section/Footer";
import Header from "./common/Section/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./common/Section/Content";

const initialState = {
  footerText: "",
  contentText: "",
};

function App() {
  const [state, setState] = useState(initialState);
  const [footerText, setFooterText] = useState("");
  const [linkText, setLinkText] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const resetSettings = () => {
    setState(initialState);
    setFooterText("");
    setLinkText("");
    setSelectedOption(null);
  };

  return (
    <>
      <Router>
        <Header footerText={state.footerText} />
        <Routes>
          <Route path="/" />
        </Routes>
        <Content
          footerText={footerText}
          setFooterText={setFooterText}
          linkText={linkText}
          setLinkText={setLinkText}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Footer
          setFooterText={(text) => setState({ ...state, footerText: text })}
          resetSettings={resetSettings}
          setFooterTextContent={setFooterText}
          setSelectedOption={setSelectedOption}
        />
      </Router>
    </>
  );
}

export default App;
