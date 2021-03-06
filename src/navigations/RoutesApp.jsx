import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../layout/Layout";

const RoutesApp = () => {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
};

export default RoutesApp;
