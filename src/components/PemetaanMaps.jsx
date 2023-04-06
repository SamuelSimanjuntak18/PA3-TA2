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
        bootstrapURLKeys={{ key: 'AIzaSyD_lX5Kf_oGH_rBt6gj-e4zH_-Xb90Qk7M' }}
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
