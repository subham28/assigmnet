import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import SearchPage from "./component/SearchPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </div>
    </Router>
  );
};
