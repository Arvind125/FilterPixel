import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/login/Login";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import Gallery from "./components/Gallery/Gallery";
import { useState } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegisteringHandler = () => {
    setIsRegistering((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      <Header />
      {!isLoggedIn && !isRegistering && (
        <Login toggleRegisteringHandler={toggleRegisteringHandler} />
      )}
      {!isLoggedIn && isRegistering && (
        <Register toggleRegisteringHandler={toggleRegisteringHandler} />
      )}
      {isLoggedIn && <Gallery />}
    </div>
  );
}

export default App;
