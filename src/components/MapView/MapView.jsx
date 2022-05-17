import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import MarkerIcon from './mapicon';
import 'leaflet/dist/leaflet.css';
import './MapView.styles.scss';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    load() {
      map.locate();
    },
    click(e) {
      setPosition(e.latlng);
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={MarkerIcon} />
  );
}

function MapView() {
  const [center, setCenter] = useState([4.60971, -74.08175]);

  useEffect(() => {
    navigator
      .geolocation
      .getCurrentPosition((pos) => setCenter([pos.coords.latitude, pos.coords.longitude]));
  }, []);

  const ChangeView = ({ cent }) => {
    const map = useMap();
    map.setView(cent);
    return null;
  };

  return (
    <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
      <ChangeView cent={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default MapView;
