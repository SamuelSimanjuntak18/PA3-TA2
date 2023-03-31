import React, { useState } from "react";
import '../styles/Report.css';


function Report() {
  // const [name, setName] = useState("Nama");
  // const [deskripsi, setDeskripsi] = useState("Deskripsi");
  // const [number, setNumber] = useState("Nomor Telepon Aktif");
  const [option, setOption] = useState("Bencana");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server
  };

  const handleAvatarChange = (event) => { };

  return (
    <div className="report">
      <form onSubmit={handleSubmit} style={{ paddingBottom: "100px" }}>
        <fieldset>
          <legend>FORM PELAPORAN</legend>
         <h6  style={{fontSize: "20px",}}> Jika anda ingin melaporkan berita terjadinya bencana alam, Silakan
          melaporkannya melalui form dibawah ini.</h6>
          <hr className="garis"></hr>
          <div className="form-group">
            <label htmlFor="option">Jenis Bencana</label>
            <select
              id="option"
              value={option}
              onChange={(event) => setOption(event.target.value)}
              required
            >
              <option value="option1">Bencana Alam</option>
              <option value="option2">Bencana Non Alam</option>
              <option value="option3">Bencana Sosial </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Lokasi</label>
            <input
              type="text"
              id="name"
              placeholder="Lokasi Bencana"
              // onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Keterangan">Keterangan</label>
            <textarea
              type="text"
              id="keterangan"
              // value={deskripsi}
              placeholder="Keterangan"
              // onChange={(event) => setDeskripsi(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Nomor Telepon</label>
            <input
              type="text"
              id="number"
              placeholder="Nomor Telepon Aktif"
              // onChange={(event) => setNumber(event.target.value)}
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
      <div>
        
      </div>
    </div>
  );
}

export default Report;