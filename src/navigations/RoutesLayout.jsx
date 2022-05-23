import { Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Candidate from "../pages/candidate/Candidate";
import Employer from "../pages/employer/Employer";

const RoutesLayout = () => {
  return (
    <Switch>
      <Route path="/candidate">
        <Candidate />
      </Route>
      <Route path="/employer">
        <Employer />
      </Route>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default RoutesLayout;
