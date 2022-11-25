import React from "react";
import { Cta, Brand, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGarlic,
} from "./containers";
import './App.css';

const app = () => {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGarlic />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default app;
