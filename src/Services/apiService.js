import axios from "axios";

const api = axios.create({
  baseURL: "http://ecommerce.sai247.in/api",
});

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

// Signup API
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/registration", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};