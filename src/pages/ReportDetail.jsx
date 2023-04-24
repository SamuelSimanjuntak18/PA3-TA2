import React, { useState, useEffect } from "react";
import { instance } from "../apis/axios";

function ReportDetail(props) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    instance
      .get(`/laporan/bencana/${id}`)
      .then((response) => {
        setReport(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {report ? (
        <div>
          <br />
          <center>
            <h3 className="card-tools text-left">Laporan Lengkap</h3>
          </center>
          <center>
            <div
              className="panel panel-default 1px"
              style={{ textAlign: "left", margin: "40px", width: "80%" }}
            >
              <div className="panel-body">
                <div className="tab-content">
                  <div
                    className="card card-default"
                    style={{
                      boxShadow: "inset 1px 1px -2px white",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{ fontFamily: "Roboto", fontWeight: "200" }}
                    >
                      <div className="row">
                        <div className="col-8">
                          <p>Tanggal</p>
                          <p>
                            {new Date(
                              report.attributes.created_at
                            ).toLocaleDateString("id-ID", {
                              dateStyle: "full",
                            })}
                          </p>
                          <p>Lokasi</p>
                          <p>{report.attributes.lokasi}</p>
                          <p>Deskripsi</p>
                          <p>{report.attributes.keterangan}</p>
                        </div>

                        <div className="col-4">
                          <img
                            src={`http://localhost:8000/laporan/${report.attributes.gambar}`}
                            alt="Logo Kebencanaan"
                          />
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 pl-5 pr-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>{" "}
          <br />
          <h4 style={{ textAlign: "left", margin: "40px" }}>
            {" "}
            Data Korban Jiwa
          </h4>
          <hr style={{ textAlign: "left", margin: "40px" }} />
          <div className="card-body">
            <div className="pl-4 pr-4 pt-0 pb-0">
              <table
                className="table table-striped table-hover table-compact table-bordered"
                style={{ textAlign: "left", margin: "40px" }}
              >
                <tbody>
                  <tr>
                    <th>Kelompok</th>
                    <th>Meninggal</th>
                    <th>Luka Berat</th>
                    <th>Luka Ringan</th>
                    <th>Hilang</th>
                    <th>Jumlah Korban</th>
                  </tr>
                  <tr>
                    <th>Anak-anak (L)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Anak-anak (P)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Dewasa (L)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Dewasa (P)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Lansia (L)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Lansia (P)</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>

                  <tr>
                    <th>Ibu hamil</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <h4 style={{ textAlign: "left", margin: "40px" }}>
            Kerusakan Infrastruktur
          </h4>
          <hr style={{ textAlign: "left", margin: "40px" }} />
          <div className="card-body">
            <div className="pl-4 pr-4 pt-0 pb-0">
              <table
                className="table table-striped table-hover table-compact table-bordered"
                style={{ textAlign: "left", margin: "40px" }}
              >
                <tbody>
                  <tr>
                    <th rowspan="2">Nama Infrastruktur</th>
                    <th colspan="2" style={{ textAlign: "center" }}>
                      Rusak
                    </th>
                    <th rowspan="2" style={{ textAlign: "center" }}>
                      Jumlah
                    </th>
                  </tr>
                  <tr>
                    <th>Berat</th>
                    <th>Ringan</th>
                  </tr>
                  <tr>
                    <th>1.Rumah</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>

                  <tr>
                    <th>2.Fasilitas Pendidikan</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>

                  <tr>
                    <th>3.Fasilitas Kesehatan</th>
                    <td align="right">0</td>
                    <td align="right">0</td>

                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>4.Fasilitas Peribadatan</th>
                    <td align="right">0</td>
                    <td align="right">0</td>

                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>5.Fasilitas Umum</th>
                    <td align="right">0</td>
                    <td align="right">0</td>

                    <td align="right">0</td>
                  </tr>
                  <tr>
                    <th>6.Perkantoran</th>
                    <td align="right">0</td>
                    <td align="right">0</td>
                    <td align="right">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="card card-default"
            style={{ boxShadow: "inset 1px 1px 10px #888" }}
          >
            <div className="card-header">
              <span style={{ fontSize: "13pt", textAlign: "left" }}>
                <h4>Upaya</h4>
              </span>
              <div className="card-tools text-right"></div>
            </div>
            <br />
            <h4 style={{ textAlign: "left", margin: "40px" }}>
              Membagikan bantuan makanan dan air bersih kepada pengungsi
            </h4>
          </div>
          <br />
          <br />
        </div>
      ) : (
        <>
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p>Loading Data</p>
        </>
      )}
    </>
  );
}

export default ReportDetail;
