import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Dynamic Post</Link>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuth(true)} />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
