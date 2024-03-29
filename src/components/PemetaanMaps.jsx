import React from 'react';
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
        bootstrapURLKeys={{ key: 'AIzaSyCnVD8EkfvSTD4s-p_EX7BV-f5LUdeG4es' }}
        
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {tobaCoordinates.map((el, index) => (
          <Marker
            key={index}
            lat={el.latitude}
            lng={el.longitude}
            desa={el.desa}
            jenis_bencana={el.jenis_bencana}
            level_bencana={el.level_bencana}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default PemetaanMaps;
