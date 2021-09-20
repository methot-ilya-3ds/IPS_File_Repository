import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Download from "../Download/Download";
import Home from "./Home";
import Form from "../Upload/SubmitModel";

import { ModelsProvider } from "../Models/ModelsContext";
import { ModelProvider } from "../Models/ModelContext";

export default memo(function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="./Home" />
      </Route>
      <Route exact path="/Home" component={Home}></Route>
      <ModelsProvider>
        <ModelProvider>
          <Route exact path="/Download" component={Download}></Route>
          <Route exact path="/Upload" component={Form}></Route>
        </ModelProvider>
      </ModelsProvider>
    </Switch>
  );
});
