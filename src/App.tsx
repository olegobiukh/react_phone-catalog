import "./App.scss";

import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./router";
import uid from "uid";

const App = () => {
  const newRoutes = routes.map((item) => (
    <Route key={uid()} exact path={item.url} component={item.component} />
  ));
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>{newRoutes}</Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
