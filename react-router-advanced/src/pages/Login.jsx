// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Simulate login
    login();
    // Redirect to profile (replace to avoid going back to login)
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>This is a simulated login for the assignment.</p>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
};

export default Login;
