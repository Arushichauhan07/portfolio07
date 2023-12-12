import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Main from "./components/Main";
import Section from "./components/Section";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Headers />
      <Main />
      <Section />
      <Contact/>
    </div>
  );
}

export default App;
