import classes from "./App.module.css";
import Order from "./components/Order";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { Suspense } from "react";

const Menu = React.lazy(() => import("./components/Menu"));
const Setting = React.lazy(() => import("./components/Setting"));

function App() {
  return (
    <div className={classes.main_container}>
      <div className={classes.left}>
        <Navbar />
      </div>

      <Suspense fallback={<div className={classes.middle} />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <div className={classes.middle}>
              <Menu />
            </div>
          </Route>
          <Route path="/setting">
            <div className={classes.middle}>
              <Setting />
            </div>
          </Route>
        </Switch>
      </Suspense>

      <div className={classes.right}>
        <Order />
      </div>
    </div>
  );
}

export default App;
