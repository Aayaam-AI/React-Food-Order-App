import classes from "./App.module.css";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Setting from "./components/Setting";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={classes.main_container}>
      <div className={classes.left}>
        <Navbar />
      </div>

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

      <div className={classes.right}>
        <Order />
      </div>
    </div>
  );
}

export default App;
