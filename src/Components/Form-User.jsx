import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import '../styles/Form-User.css';
import background from '../assets/marjan-blan-9--McZPOCCs-unsplash.jpg';

function Form_User({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await api.post(route, { username, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Left background side */}
      <div
        className="auth-left"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Right side form */}
      <div className="auth-right">
        <div className="auth-header">
          <h1 className="auth-logo">Jobaroo</h1>
          <p className="auth-tagline">Gateway to opportunity</p>
        </div>

        <div className="auth-tabs">
          <Link
            to="/login"
            className={`tab ${method === "login" ? "active" : ""}`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`tab ${method === "register" ? "active" : ""}`}
          >
            Register
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          <h2>{name}</h2>

          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {errorMessage && <p className="error-text">{errorMessage}</p>}

          <button className="form-button" type="submit" disabled={loading}>
            {loading ? "Processing..." : name}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form_User;
