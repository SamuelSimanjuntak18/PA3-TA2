import GoogleMapReact from 'google-map-react';
import { tobaCoordinates } from '../constants/maps';
import Marker from './maps/Marker';

function PemetaanMaps() {
  const defaultProps = {
    center: {
      lat: 2.3357,
      lng: 99.0534,
    },
    zoom: 11,
  };

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
