import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export function MapWidget() {
    const mapRef = useRef(null);

    useEffect(() => {
      if (!mapRef.current) return;
  
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
  
      return () => {
        map.setTarget(null);
      };
    }, []);
  
    return (
        <div ref={mapRef} className="mapContainer">

        </div>
    )
}