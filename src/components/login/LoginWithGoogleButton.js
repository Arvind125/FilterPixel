import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "187692643059-cdaup8bv1kjtri625d7v63l635me31qg.apps.googleusercontent.com";

const LoginWithGoogleButton = () => {
  const handleGoogleLogin = (response) => {
    console.log("Google Login Response:", response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Error:", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginWithGoogleButton;
