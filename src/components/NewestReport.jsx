import ReportDetail from '../pages/ReportDetail';
import React, { useState, useEffect } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { instance } from '../apis/axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function NewestReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    instance
      .get('/laporan/bencana')
      .then((response) => {
        setReports(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-oranye text-black p-1">
      <div className="container">
        <div className="col-md-12 mt-5 mb-5">
          <div className="my-5">
            <h4 className="mb-5 text-white">Bencana Terkini </h4>
            <div className="row">
              {reports ? (
                reports.slice(0, 3).map((report) => (
                  <div className="col-md-4 mb-3" key={report.id}>
                    <div className="card text-start" style={{ padding: '0px' }}>
                      <img
                        style={{ borderRadius: '5px 5px 0 0' }}
                        src={`http://localhost:8000/laporan/${report.attributes.gambar}`}
                        alt={report.attributes.gambar}
                      />
                      <div className="card-body">
                        <h6 className="card-title text-start">
                          {report.attributes.nama_bencana}
                        </h6>
                        <p className="card-subtitle mb-2 text-muted ">
                          {new Date(
                            report.attributes.created_at
                          ).toLocaleDateString('id-ID', {
                            dateStyle: 'full',
                          })}
                        </p>
                        <p className="text-secondary fw-light mt-3">
                          {report.attributes.keterangan}
                        </p>
                        <button
                          className="btn btn-primary mt-5"
                          style={{
                            backgroundColor: '#0255A5',
                          }}
                        >
                          <Link
                            to={`/reports/${report.id}`}
                            style={{ textDecoration: 'none', color: 'white' }}
                          >
                            <strong>Baca Selengkapnya</strong>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p>Loading</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewestReport;
