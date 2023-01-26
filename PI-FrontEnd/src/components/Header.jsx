import React, { useContext } from "react";
import styles from "./modules/header.module.css";
import imgLogo from "/images/Logoultimo.png";
import { Link, useHref } from "react-router-dom";
import { ImMenu3 } from "react-icons/im";
import { LoginPageContext } from "../context/LoginPageContext";

export function Header() {
  const { user, successfulLogin, setSuccessfulLogin } = useContext(LoginPageContext);

  return (
    <div className={`${styles.container_header}`}>
      <div>
        <Link to="/home" className={`${styles.container_logo}`}>
          <img src={imgLogo} className={`${styles.logo}`} />
        </Link>
      </div>

      {successfulLogin ? (
        <section className={styles.login}>
          <div className={styles.welcome}>
            <h2>Hola {user.name}</h2>
            <span>{user.name.toUpperCase().charAt(0)}</span>
          </div>
          <Link
            className={styles.link}
            onClick={() => setSuccessfulLogin(false)}
            to="/home"
          >
            Logout
          </Link>
        </section>
      ) : (
        <div className={`${styles.container_buttons}`}>
          <button className={`${styles.btn} ${styles.custom_btn}`}>
            <span>Sign in</span>
          </button>
          <button className={`${styles.btn} ${styles.custom_btn}`}>
            <span>Login</span>
          </button>
        </div>
      )}

      <div className={`${styles.container_icon}`}>
        <ImMenu3 className={`${styles.menu_icon}`} />
      </div>
    </div>
  );
}
