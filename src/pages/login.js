import React from "react";
import { useState } from "react";
import '../styles/login.css';


function Login() {
  const [username, setUsername] = useState("samuelsimanjuntak195@gmail.com");
  const [password, setPassword] = useState("123456s");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-box">
      <img
          src="/logo.png"
          alt="Logo Kebencanaan"
          className="login-logo"
        /><br/>
        <strong>Badan Penanggulangan Bencana Daerah</strong>
        
        <br/>
        <h6>Kabupaten Toba</h6>
        <form className="login-form" onSubmit={handleLogin}>
            <h3 className="tes">Login</h3>
            <hr/>
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
          <button type="submit" className="login-button">
            Masuk
          </button>
          <div className="login-footer">
           <a href="/register" ><strong>Tidak punya akun? Daftar?</strong></a>
          
        </div>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
