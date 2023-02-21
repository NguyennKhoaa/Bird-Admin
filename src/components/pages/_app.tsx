import React from "react";
import Appbar from "../Appbar/Appbar";
import About from "../Detail/About";
import DateRangeCustom from "../Detail/DateRangeCustom";
import Detail from "../Detail/Detail";
import Footer from "../Footer/Footer";
import AppConfig from "../template/AppConfig";
import Home from "./Home/Home";
import Router from "./_routes";

const App = (): JSX.Element => {
  return (
    <AppConfig>
      <Router />
    </AppConfig>
  );
};

export default App;
