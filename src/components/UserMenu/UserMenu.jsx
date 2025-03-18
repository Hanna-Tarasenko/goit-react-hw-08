import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  return (
    <div>
      <p>Welcome, {userName}!</p>
          <button className={s.btn} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
