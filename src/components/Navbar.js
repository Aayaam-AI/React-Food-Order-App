import { Fragment } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const location = useLocation();
  const home = location.pathname==='/home' || location.pathname==='/';
  const setting = location.pathname==='/setting';

  return (
    <Fragment>
      <NavLink to="/home">
        <button
          className={`${classes.nav_button} ${home ? classes.current : ""}`}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"
            alt="img"
          />
        </button>
      </NavLink>
      <NavLink to="/setting">
        <button
          className={`${classes.nav_button} ${setting ? classes.current : ""}`}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png"
            alt="img"
          />
        </button>
      </NavLink>
    </Fragment>
  );
};

export default Navbar;
