import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import HomeAdmin from "./pages/HomeAdmin";
import Captations from "./pages/Captations";
import Sent from "./pages/Sent";
import Settings from "./pages/Settings";
import Property from "./pages/Property";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/home" exact component={HomeAdmin} />
        <Route path="/admin/captations" exact component={Captations} />
        <Route path="/admin/sent" exact component={Sent} />
        <Route path="/admin/settings" exact component={Settings} />
        <Route path="/admin/property" exact component={Property} />
      </Switch>
    </BrowserRouter>
  );
}
