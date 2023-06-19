import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useGeographic } from 'ol/proj';

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
          center: [-2.5964916814185637, 51.45600970269076],
          zoom: 18,
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