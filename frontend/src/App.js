import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cases from "./components/Cases";
import Ngo from "./components/Ngo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Ngosignup from "./components/Ngosignup";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/cases" render={() => <Cases />} />
        <Route exact path="/ngo" render={() => <Ngo />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/ngosignup" render={() => <Ngosignup />} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
