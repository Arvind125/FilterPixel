import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "187692643059-cdaup8bv1kjtri625d7v63l635me31qg.apps.googleusercontent.com";

const RegisterWithGoogle = () => {
  const handleGoogleRegister = (response) => {
    console.log("Google Register Response:", response);
  };

  const handleGoogleRegisterFailure = (error) => {
    console.error("Google Register Error:", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Register with Google"
      onSuccess={handleGoogleRegister}
      onFailure={handleGoogleRegisterFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default RegisterWithGoogle;
