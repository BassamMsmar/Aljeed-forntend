import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Mainconten/MainContent";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
