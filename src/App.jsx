import { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
