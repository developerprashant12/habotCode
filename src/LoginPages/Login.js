import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  console.log("login", login);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
    setSuccessMessage("");

    // Validation
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // Check user data from localStorage
    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      setErrorMessage("User not found. Please register.");
      return;
    }

    const userData = JSON.parse(storedUser);

    // Verify password
    if (userData.password !== password) {
      setErrorMessage("Incorrect password. Please try again.");
      return;
    }

    // Log in the user
    login(userData);
    setSuccessMessage("Login successful! Redirecting...");

    // Redirect to homepage
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-[70vh] md:min-h-screen md:w-[100vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg m-3 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {errorMessage && (
          <p className="text-red-500 mb-4 capitalize">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-buttonColor1 rounded-md hover:bg-buttonColor1-dark focus:outline-none"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="flex justify-center gap-2 mt-4 text-sm text-gray-600">
          <p>If you have no account?</p>
          <a href="/register" className="underline text-buttonColor1">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
