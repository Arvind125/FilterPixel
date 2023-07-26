import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <h1>FilterPixel</h1>
      {isLoggedIn && (
        <button className={styles.button} onClick={logoutHandler}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
