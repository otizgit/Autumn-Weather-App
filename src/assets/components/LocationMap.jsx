import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMap({ latitude, longitude }) {
  const position = [latitude, longitude]; // Coordinates from the API

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "200px" }} // Adjust size as needed
    >
      {/* Tile layer for the map (OpenStreetMap is free and popular) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker to indicate the location */}
    </MapContainer>
  );
}

export default LocationMap;
