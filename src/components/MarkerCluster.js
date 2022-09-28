import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import lighthouse from "../img/lighthouse.svg";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

const customIcon = new L.Icon({
	iconUrl: lighthouse,
	iconSize: [30, 46],
});

const MarkerCluster = ({ markers }) => {
	const renderMarkers = markers.map((marker, i) => {
		return (
			<Marker
				key={i}
				icon={customIcon}
				position={[marker.position.lat, marker.position.lng]}
			>
				<Popup>
					<p>
						<b>Naziv objekta: {marker.info.naziv_objekta}</b>
					</p>
					<p>PS broj: {marker.info.ps_br}</p>
					<p>E broj: {marker.info.e_br}</p>
					<p>Tip objekta: {marker.info.tip_objekta}</p>
					<p>Lučka kapetanija: {marker.info.lucka_kapetanija}</p>
				</Popup>
			</Marker>
		);
	});

	return (
		<div>
			<MarkerClusterGroup>{renderMarkers}</MarkerClusterGroup>
		</div>
	);
};

export default MarkerCluster;
