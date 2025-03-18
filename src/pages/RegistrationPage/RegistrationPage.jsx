import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";
const RegistrationPage = () => {
  return (
    <div>
      <h5 className={s.header}>Register</h5>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
