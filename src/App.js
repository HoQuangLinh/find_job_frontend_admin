import React from "react";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./navigations/RoutesApp";

const App = () => {
  return (
    <Router>
      <RoutesApp />
    </Router>
  );
};

export default App;
