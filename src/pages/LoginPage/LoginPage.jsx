import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <h5 className={s.header}>Login</h5>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
