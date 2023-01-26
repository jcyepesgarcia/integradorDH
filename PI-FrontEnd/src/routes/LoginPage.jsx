import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageContext } from "../context/LoginPageContext";
import styles from "./modules/loginPage.module.css";

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [formValues, setformValues] = useState(initialValues);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { user, setSuccessfulLogin } = useContext(LoginPageContext);
  const { email, password } = formValues;

  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;
    setformValues({ ...formValues, [name]: value });
  }

  function validateEmail() {
    const pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      email.trim() !== user.email ||
      email.length === 0 ||
      !pattern.test(email)
    )
      return false;
    return true;
  }

  function validatePassword() {
    if (password.trim() !== user.password || password.trim().length <= 6)
      return false;
    return true;
  }

  const onResetForm = () => {
    setformValues(initialValues);
  };

  function onSubmit(event) {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
      setSuccessfulLogin(true)
      setShowErrorMessage(false);
      navigate(`/home`);
    } else {
      setShowErrorMessage(true);
      setSuccessfulLogin(false);
    }
    onResetForm();
  }

  return (
    <div className={styles.form_Container}>
      <h3 className={styles.subtitle}>Sign in</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.form_control}>
          <label htmlFor="formEmail">Email</label>
          <input
            name="email"
            type="email"
            classID="formEmail"
            onChange={onChange}
            value={email}
            autoComplete="on"
          />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="formPassword">Password</label>
          <input
            name="password"
            type="password"
            classID="formPassword"
            onChange={onChange}
            value={password}
            autoComplete="current-password"
          />
        </div>

        {showErrorMessage && (
          <span className={styles.error}>
            Please try again, your credentials are invalid
          </span>
        )}

        <div className={styles.btn_container}>
          <button type="submit" className={styles.btn}>
          Login
          </button>
          <span>
            Don't have an account yet? &nbsp;
            <Link to="/register">Create account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
