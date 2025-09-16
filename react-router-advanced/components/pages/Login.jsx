import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
};

export default Login;
