import Router from "./Home/Router";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import React, { Component, useEffect, } from "react";

const App = () => {

  const state = {
    data: null
  };
 const componentDidMount = async () => {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  };
    // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  return (
    <>
      <Header />
      <Router />
      <Footer />
      
    </>
  );
};

export default App;
