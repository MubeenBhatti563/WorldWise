import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import useCity from "../hooks/useCity";
import useGeoLocation from "../hooks/useGeoLocation";
import Button from "./Button";
import useUrlPosition from "../hooks/useUrlPosition";
import useAuth from "../hooks/useAuth";

const Map = () => {
  const { lat, lng } = useUrlPosition();
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([38.7223, -9.1393]);
  const { getLocation, loading, location } = useGeoLocation();
  const { cities } = useCity();
  const { user, avatar, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
    if (!isAuthenticated) {
      navigate("/");
    }
    if (location) setMapPosition([location.latitude, location.longitude]);
  }, [lat, lng, isAuthenticated, navigate, location]);

  return (
    <div className="h-screen bg-white">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {user && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-1000 px-4 bg-slate-800 text-white  rounded-sm shadow-2xl transition-all active:scale-95 whitespace-nowrap cursor-default flex items-center gap-2 text-[14px] py-3">
            <img src={avatar} alt="avatar" className="rounded-full w-10" />
            <span>Welcome, {user}</span>
            <span
              className="bg-slate-600 py-0.5 px-2 rounded-sm cursor-pointer"
              onClick={logout}
            >
              Logout
            </span>
          </div>
        )}
        {!location && (
          <Button type="position" onClick={getLocation}>
            {loading ? "Loading..." : "Use your position"}
          </Button>
        )}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((item) => (
          <Marker
            key={item.id}
            position={[item.position.lat, item.position.lng]}
          >
            <Popup>
              <span className="mr-1">{item.emoji}</span>
              <span>{item.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null;
};

export default Map;
