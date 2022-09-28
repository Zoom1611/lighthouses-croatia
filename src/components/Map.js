import React from "react";
import L from "leaflet";
import {
	MapContainer,
	TileLayer,
	LayersControl,
	LayerGroup,
} from "react-leaflet";
import "./Map.css";
import MarkerCluster from "./MarkerCluster";

const Map = ({ data }) => {
	let markers;

	const southWest = L.latLng(46.813435, 19.396171);
	const northEast = L.latLng(41.592416, 13.024097);
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
		<div className="top-[50px] right-0 left-0 bottom-0 fixed">
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
							<MarkerCluster markers={markers} />
						</LayerGroup>
					</LayersControl.Overlay>
				</LayersControl>
			</MapContainer>
		</div>
	);
};

export default Map;
