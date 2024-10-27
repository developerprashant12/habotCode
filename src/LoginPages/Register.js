import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const validatePassword = (password) => {
    const minLength = 8;
    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    return null;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const errors = {};
    if (!fullName) errors.fullName = "Full Name is required";
    if (!email) errors.email = "Email is required";
    if (!phoneNumber) errors.phoneNumber = "Phone Number is required";

    const passwordError = validatePassword(password);
    if (passwordError) errors.password = passwordError;
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const userData = {
      id: new Date().getTime(),
      name: fullName,
      email: email,
      phone: phoneNumber,
      password: password,
      photo: photo ? URL.createObjectURL(photo) : null,
    };

    
    setSuccessMessage("User successfully registered");

    // Log the user in
    login(userData);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen md:w-[100vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg m-3 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Create an Account</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <form className="space-y-6" onSubmit={handleSignup}>
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your full name"
            />
            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your email"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your number"
            />
            {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Enter your password"
            />
            {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
              placeholder="Confirm your password"
            />
            {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
          </div>

          {/* Photo Upload Input */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full mt-1 border rounded-md focus:outline-none focus:ring focus:ring-buttonColor1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-buttonColor1 rounded-md hover:bg-buttonColor2 focus:outline-none"
          >
            Register
          </button>
        </form>

        {/* Already have an account Link */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-buttonColor1 underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;