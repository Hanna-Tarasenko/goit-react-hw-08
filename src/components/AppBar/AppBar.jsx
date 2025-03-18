import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.navContainer}>
        <Navigation />
      </div>
      <div className={s.menuContainer}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
