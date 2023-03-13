import GoogleMapReact from "google-map-react";
import { useState } from "react";

const Marker = ({ text }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };
  

  return (
    <div
      onClick={handleClick}
      className="bg-danger position-relative"
      style={{
        padding: "10px",
        borderRadius: "100%",
        width: "10px",
        height: "10px",
      }}
    >
      <span className="text-white fw-bold">{text}</span>
      {modal && (
        <div
          className="position-absolute bg-success"
          style={{ width: "200px", height: "75px", 'padding': '10px' }}
        >
          <p className="text-white fw-bold">{text} <br/> Gempa Bumi</p>
        </div>
      )}
    </div>
  );
};

function PemetaanMaps() {
  const defaultProps = {
    center: {
      lat: 3.5952,
      lng: 98.6722,
    },
    zoom: 11,
  };

  const northSumatraCoordinates = [
    { city: "Medan", latitude: 3.5952, longitude: 98.6722 },
    { city: "Pematang Siantar", latitude: 2.9611, longitude: 99.0686 },
    { city: "Tebing Tinggi", latitude: 3.3263, longitude: 99.1555 },
    { city: "Binjai", latitude: 3.6001, longitude: 98.4842 },
    { city: "Lake Toba", latitude: 2.6211, longitude: 98.7878 },
    { city: "Sipiso-piso waterfall", latitude: 2.8525, longitude: 98.7661 },
  ];
  

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyALHLAlODIkPH9o3Pc2q2-agNaN7L-ytao" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        { northSumatraCoordinates.map((el, index) => (
          <Marker lat={el.latitude} lng={el.longitude} text={el.city} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default PemetaanMaps;
