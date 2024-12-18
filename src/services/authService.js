import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
};

export const signUp = async (credentials) => {
  const response = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("not able to register " + response);

  const { accessToken } = await response.json();
  localStorage.setItem("accessToken", accessToken);
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};

export const getToken = () => localStorage.getItem("accessToken");
