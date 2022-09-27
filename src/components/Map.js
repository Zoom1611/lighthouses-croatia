import React from "react";
import L from "leaflet";
import {
	MapContainer,
	TileLayer,
	LayersControl,
	LayerGroup,
} from "react-leaflet";
import "./Map.css";
// import lighthouse from "../img/lighthouse.svg";
// import { useEffect } from "react";
import MarkerCluster from "./MarkerCluster";

/* const getIcon = iconSize => {
	return L.icon({
		iconUrl: lighthouse,
		iconSize: [iconSize],
	});
}; */

//https://codesandbox.io/s/leaflet-markerclusters-performance-test-removelayer-addlayer-forked-ozq5c6?file=/src/Leaflet.jsx

const Map = ({ data }) => {
	let markers;

	const southWest = L.latLng(41.718166, 13.384899);
	const northEast = L.latLng(46.849106, 20.710189);
	const bounds = L.latLngBounds(southWest, northEast);

	const addMarkers = () => {
		markers = [];
		data.forEach(marker => {
			markers.push({
				position: {
					lng: marker.geometry.coordinates[0],
					lat: marker.geometry.coordinates[1],
				},
				info: marker.properties,
			});
		});
	};

	addMarkers();

	return (
		<MapContainer
			center={[43.508133, 16.440193]}
			zoom={13}
			scrollWheelZoom={true}
			maxBounds={bounds}
			maxZoom={19}
			minZoom={7}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LayersControl position="topright">
				<LayersControl.Overlay checked name="Lighthouses">
					<LayerGroup>
						<MarkerCluster markers={markers} addMarkers={addMarkers} />
					</LayerGroup>
				</LayersControl.Overlay>
			</LayersControl>
		</MapContainer>
	);
};

export default Map;
