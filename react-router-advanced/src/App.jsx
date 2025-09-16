// src/App.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// ----- Pages -----
const Home = () => <h2>Home Page</h2>;

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <nav>
      <Link to="details">Details</Link> |{" "}
      <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const ProfileDetails = () => <h3>Profile Details</h3>;
const ProfileSettings = () => <h3>Profile Settings</h3>;

// Dynamic BlogPost
const BlogPost = () => {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
};

const Login = () => <h2>Login Page</h2>;

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected + Nested */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

