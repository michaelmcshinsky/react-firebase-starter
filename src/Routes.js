import React from "react";
import { Switch, Route } from "react-router-dom";

import { Navigation, PrivateRoute } from "@/components";
import { Home, Dashboard, Login, Register, ForgotPassword } from "@/views";

export function Routes() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute exact path="/admin" component={Dashboard} />
        <Route exact path="*" component={Home} />
      </Switch>
    </>
  );
}

export default Routes;
