import React from 'react';


import Header from "./components/header/header";
import Information from "./components/info/Info";
import Skills from "./components/skills/skills";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
      <>
        <Header />
        <Information />
        <Skills />
        <Works />
        <Contacts />
        <Footer/>
      </>
  )
}

export default App