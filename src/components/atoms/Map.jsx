import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function Map(props) {
 const [position, setPosition] = useState([-27.5935, -48.55854]);
 return (
  <MapContainer
   center={position}
   zoom={13}
   scrollWheelZoom={false}
   className="map-container"
   {...props}>
   <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
  </MapContainer>
 );
}

export default Map;
