import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <Note />
      <Footer />
    </>
  );
};

export default App;
