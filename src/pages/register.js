import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
    console.log(passwordShown)
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
    console.log(passwordShown)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <img src="/logo.png" alt="Logo Kebencanaan" className="login-logo" />
      <br />
      <strong>Badan Penanggulangan Bencana Daerah</strong>
      <br />
      <h6>Kabupaten Toba</h6>  <br />
      <div className="register-container">
        <h3
          style={{
            color: "#7CC6F6",
            fontWeight: "bold",
          }}
        >
          Daftar Akun
        </h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Alamat</label>
            <textarea
              id="address"
              name="address"
              onChange={handleInputChange}
              value={formData.address}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Nomor Telepon</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleInputChange}
              value={formData.phone}
              required
            />
          </div>
          <div className="input-group"> 
            <label htmlFor="password">Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleInputChange}
                value={formData.password} 
                required
              />
              <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} className="show-password-icon"/>
            
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Konfirmasi Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
           
              <input
                type={confirmPasswordShown ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleInputChange}
                value={formData.confirmPassword}
                required
              />
              <FontAwesomeIcon
                icon={faEye}
                onClick={toggleConfirmPasswordVisiblity} className="show-password-icon"  />
            </div>
       
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
