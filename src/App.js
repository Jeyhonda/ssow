import React, { useState, useEffect, Suspense, lazy } from 'react'
import { ethers } from 'ethers'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from './components/Modal'
import openseaLogo from './assets/opensea-logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import myEpicNft from './utils/Whale.json'
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.min.css';

const HomeView = lazy(() => import("./views/Home"));


const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomeView/>}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
