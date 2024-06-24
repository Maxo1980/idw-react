import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import "./Map.css";
import icon  from "leaflet/dist/images/marker-icon.png";
import iconShadow  from "leaflet/dist/images/marker-icon.png";

let icoUbicacion = new L.icon({
    iconUrl: icon,
    iconShadows: iconShadow,
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const Map = ({ latitud, longitud }) => {
  return (
    <>
      <MapContainer
        center={[latitud, longitud]}
        zoom={17}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitud, longitud]} icon={icoUbicacion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
