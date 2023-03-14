import React, { useState } from "react";
import "./Form.css";

function Report() {
  const [name, setName] = useState("Nama");
  const [deskripsi, setDeskripsi] = useState("Deskripsi");
  const [number, setNumber] = useState("082274335745");
  const [option, setOption] = useState("Bencana");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server
  };

  const handleAvatarChange = (event) => {};

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>FORM PELAPORAN</legend>
        Jika anda ingin melaporkan berita terjadinya bencana alam, Silakan
        melaporkannya melalui form dibawah ini.
        <hr className="garis"></hr>
        <div className="form-group">
          <label htmlFor="option">Jenis Bencana</label>
          <select
            id="option"
            value={option}
            onChange={(event) => setOption(event.target.value)}
            required
          >
            <option value="option1">Pilih Bencana Alam</option>
            <option value="option2">Bencana Non Alam</option>
            <option value="option3">Bencana Sosial </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Lokasi</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            type="deskripsi"
            id="deskripsi"
            value={deskripsi}
            onChange={(event) => setDeskripsi(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Nomor Telepon</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gambar">Gambar</label>
          <input type="file" id="gambar" onChange={handleAvatarChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Report;
