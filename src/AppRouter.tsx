// Packages
import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory, History } from "history";

// Exports
export default AppRouter;

const history: History = createBrowserHistory();

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./Components/Pages/HomePage")
);

function AppRouter(): React.ReactElement {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
