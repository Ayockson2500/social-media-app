import React from "react";
import {useAuth0} from "@auth0/auth0-react"
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import "../css/SignupPage.css";

const SignUpPage = () => {
  const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0()

  if (isLoading) return <div>Loading...</div>;

  return (
    !isAuthenticated && (
    <div className="sign-up">
        <h2 className="text-center">Sign Up</h2>
      <div className="signup-btn mb-5">
        <FaFacebookF className="me-2" /> Continue with facebook
      </div>
      <div className="signup-btn mb-5">
        <FiMail className="me-2" /> Continue with email
      </div>
      <div className="signup-btn" onClick={() => loginWithRedirect()}>
        <FaGoogle className="me-2" /> Sign-In with Google
      </div>
    </div>
    )
  );
};

export default SignUpPage;
