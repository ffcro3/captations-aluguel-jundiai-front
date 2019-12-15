import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Captations from "./pages/Captations";
import Sent from "./pages/Sent";
import Settings from "./pages/Settings";
import Property from "./pages/Property";
import Users from "./pages/Users";
import UsersEdit from "./pages/User";
import MailConfig from "./pages/MailConfig";
import Files from "./pages/Files";
import Reports from "./pages/Reports";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/captations" exact component={Captations} />
        <Route path="/admin/sent" exact component={Sent} />
        <Route path="/admin/settings" exact component={Settings} />
        <Route path="/admin/property" exact component={Property} />
        <Route path="/admin/users" exact component={Users} />
        <Route path="/admin/user-edit" exact component={UsersEdit} />
      </Switch>
    </BrowserRouter>
  );
}
