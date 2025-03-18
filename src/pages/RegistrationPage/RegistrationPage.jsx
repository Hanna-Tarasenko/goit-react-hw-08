import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";
const RegistrationPage = () => {
  return (
    <div>
      <h2 className={s.header}>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
