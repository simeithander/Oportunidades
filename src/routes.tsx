import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
