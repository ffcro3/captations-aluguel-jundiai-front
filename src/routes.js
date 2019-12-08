import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import Admin from "./pages/Admin";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/home" exact component={HomeAdmin} />
      </Switch>
    </BrowserRouter>
  );
}
