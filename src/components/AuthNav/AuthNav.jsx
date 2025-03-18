import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" className={s.authBtn}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.authBtn}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
