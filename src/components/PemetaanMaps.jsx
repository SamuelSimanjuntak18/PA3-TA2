import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

const Marker = ({ desa, jenis_bencana }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-danger position-relative"
      style={{
        padding: '10px',
        borderRadius: '100%',
        width: '10px',
        height: '10px',
      }}
    >
      <span
        className="text-white fw-bold position-absolute"
        style={{ width: '30px' }}
      >
        {desa}
      </span>
      {modal && (
        <div
          className="position-absolute bg-white text-start"
          style={{ width: '250px', height: 'initial', padding: '10px' }}
        >
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2018/11/30/c668919c-a1e7-4f89-a06c-d9627861d5a3_169.jpeg?w=700&q=90"
            alt=""
            srcset=""
            className="w-100"
          />
          <p className="fw-bold m-0 mt-2" style={{ fontSize: '18px' }}>
            {desa}
          </p>
          <p className="fw-medium m-0" style={{ fontSize: '14px' }}>
            {jenis_bencana}
          </p>
        </div>
      )}
    </div>
  );
};

function PemetaanMaps() {
  const defaultProps = {
    center: {
      lat: 2.3357,
      lng: 99.0534,
    },
    zoom: 11,
  };

  const tobaCoordinates = [
    {
      desa: 'Parsaoran',
      kecamatan: 'Ajibata',
      longitude: 98.93466667,
      latitude: 2.65511111,
      jenis_bencana: 'Banjir',
    },
    {
      desa: 'Motung',
      kecamatan: 'Ajibata',
      longitude: 98.93266667,
      latitude: 2.64891667,
      jenis_bencana: 'Banjir',
    },
    {
      desa: 'Motung',
      kecamatan: 'Ajibata',
      longitude: 98.93266667,
      latitude: 2.64891667,
      jenis_bencana: 'Banjir',
    },
    {
      desa: 'Sigapiton',
      kecamatan: 'Ajibata',
      longitude: 98.94361111,
      latitude: 2.58580556,
      jenis_bencana: 'Rawan Longsor',
    },
    {
      desa: 'Pardamean',
      kecamatan: 'Ajibata',
      longitude: 98.94361111,
      latitude: 2.58580556,
      jenis_bencana: 'Rawan Longsor',
    },
    {
      desa: 'Siboruan',
      kecamatan: 'Balige',
      longitude: 99.07758333,
      latitude: 2.29769444,
      jenis_bencana: 'Rawan Longsor',
    },
    {
      desa: 'Siboruon',
      kecamatan: 'Balige',
      longitude: 99.07268917,
      latitude: 2.30781667,
      jenis_bencana: 'Rawan Longsor',
    },
  ];

  return (
    <div
      className="box-pemetaan overflow-hidden"
      style={{ height: '350px', width: '100%' }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyALHLAlODIkPH9o3Pc2q2-agNaN7L-ytao' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {tobaCoordinates.map((el, index) => (
          <Marker
            lat={el.latitude}
            lng={el.longitude}
            desa={el.desa}
            jenis_bencana={el.jenis_bencana}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default PemetaanMaps;
