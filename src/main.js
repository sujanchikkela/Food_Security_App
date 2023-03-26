/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login";
// import Signup from "./components/signup";
import Landing from "./components/landing";
import TimeSeries from "./components/TIMESERIES/timeseries";

const Main = () => (
  <>
    <Switch>
      <Route path="/" component={TimeSeries} />
    </Switch>
  </>
);

export default Main;