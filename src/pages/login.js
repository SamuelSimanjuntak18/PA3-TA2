import login from "../apis/auth";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token') || null;

    if (isAuthenticated) {
      history.push('/')
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const response = await login({ email: username, password: password });
    console.log(response === 200);
    if (response === 200) {
      history.push("/");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/logo.png" alt="Logo Kebencanaan" className="login-logo" />
        <br />
        <strong>Badan Penanggulangan Bencana Daerah</strong>

        <br />
        <h6>Kabupaten Toba</h6>
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="tes">Login</h3>
          <hr />
          <input
            type="text"
            placeholder="Username/Email"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </>
            ) : (
              <>Masuk</>
            )}
          </button>
          <div className="login-footer">
            <a href="/register">
              <strong>Tidak punya akun? Daftar?</strong>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
