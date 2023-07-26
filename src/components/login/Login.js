import React, { useState } from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const usernameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (enteredUsername === "username" && enteredPassword === "password") {
      // do login work here

      dispatch(
        authActions.login({
          name: enteredUsername,
          token: enteredUsername + enteredPassword,
        })
      );

      setEnteredUsername("");
      setEnteredPassword("");
      setError(null);
    } else {
      setError("Please enter valid Credentials");
    }
  };

  const signupHandler = () => {
    props.toggleRegisteringHandler();
  };

  return (
    <Card className={styles.login}>
      <form className={styles.form} onSubmit={loginHandler}>
        <input
          placeholder="Username"
          value={enteredUsername}
          type="text"
          onChange={usernameInputChangeHandler}
        />

        <input
          placeholder="Password"
          value={enteredPassword}
          type="password"
          onChange={passwordInputChangeHandler}
        />

        {error && error.length > 0 && <p className={styles.error}>{error}</p>}

        <div className={styles.action}>
          <button type="button">Forgot Password</button>
          <button type="button" onClick={signupHandler}>
            Register Now
          </button>
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <LoginWithGoogleButton />
    </Card>
  );
};

export default Login;
