import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map(props) {
 const { position, zoom, markers } = props;

 if (!markers) return null;

 return (
  <MapContainer
   center={position}
   zoom={zoom}
   scrollWheelZoom={false}
   className="map-container"
   {...props}>
   <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
   {Object.values(markers).map((marker, index) => (
    <Marker
     key={index}
     position={[Number(marker.latitude), Number(marker.longitude)]}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   ))}
  </MapContainer>
 );
}

export default Map;
