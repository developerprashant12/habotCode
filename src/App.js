// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./LoginPages/Login";
import Register from "./LoginPages/Register";
import Profile from "./LoginPages/Profile";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children, condition, redirectTo }) => {
  return condition ? children : <Navigate to={redirectTo} />;
};

function App() {
  const { user, loading } = useAuth();
  const isLoggedIn = user !== null;

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute condition={isLoggedIn} redirectTo="/login">
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
