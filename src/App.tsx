import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';

function App() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 8.54693,
          latitude: 47.365682,
          zoom: 12
        }}
        style={{width: "100%", height: "100%"}}
        mapStyle="http://[::]:8080/styles/basic-preview/style.json"
      />
    </div>
  );
}

export default App;