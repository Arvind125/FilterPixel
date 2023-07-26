import React from "react";
import styles from "./register.module.css";
import RegisterWithGoogle from "./RegisterWithGoogle";

const Register = (props) => {
  const registerHandler = (event) => {
    event.preventDefault();
    props.toggleRegisteringHandler();
  };
  return (
    <form className={styles.form} onSubmit={registerHandler}>
      <div className={styles.formItem}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" required />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="secondName">Second Name</label>
        <input id="secondName" type="text" />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" required />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
      </div>

      <div className={styles.action}>
        <button
          onClick={props.toggleRegisteringHandler}
          className={`${styles.button} ${styles.already}`}
          type="button"
        >
          Already have an account
        </button>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </div>
      <div className={styles.google}>
        <RegisterWithGoogle />
      </div>
    </form>
  );
};

export default Register;
