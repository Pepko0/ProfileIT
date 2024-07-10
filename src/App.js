import React, { useState } from 'react';
import './App.css';
import Footer from './common/Section/Footer';
import Header from './common/Section/Header';

function App() {
  const [footerText, setFooterText] = useState("");
  
  return (
    <>
    
  <Header footerText={footerText}/>

  <Footer setFooterText={setFooterText} />
    </>
  
  );
 
}

export default App;
