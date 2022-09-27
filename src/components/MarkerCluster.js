import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";
import lighthouse from "../img/lighthouse.svg";

const markerClusters = L.markerClusterGroup();

const customIcon = new L.Icon({
	iconUrl: lighthouse,
	iconSize: [30, 46],
});

const MarkerCluster = ({ markers, addMarkers }) => {
	const map = useMap();

	/* useEffect(() => {
		let lighthouseMarkers = [];
		markers.forEach(({ position, info }) =>
			lighthouseMarkers.push(
				L.marker(new L.LatLng(position.lat, position.lng), {
					icon: customIcon,
					draggable: false,
				})
					.bindPopup(
						`
					<p><b>Naziv objekta: ${info.naziv_objekta}</b></p> \
					<p>PS broj: ${info.ps_br}</p> \
					<p>E broj: ${info.e_br}</p> \
					<p>Tip objekta: ${info.tip_objekta}</p> \
					<p>Lučka kapetanija: ${info.lucka_kapetanija}</p>
				`
					)
					.addTo(markerClusters)
			)
		);

		const lighthouses = L.layerGroup(lighthouseMarkers);

		const overlay = {
			Lighthouses: lighthouses,
		};

		const layerControl = L.control.layers(overlay);

		map.addLayer(layerControl);

		console.log(lighthouseMarkers);
	}, [map, markers]); */

	useEffect(() => {
		markerClusters.clearLayers();
		markers.forEach(({ position, info }) =>
			L.marker(new L.LatLng(position.lat, position.lng), {
				icon: customIcon,
				draggable: false,
			})
				.bindPopup(
					`
					<p><b>Naziv objekta: ${info.naziv_objekta}</b></p> \
					<p>PS broj: ${info.ps_br}</p> \
					<p>E broj: ${info.e_br}</p> \
					<p>Tip objekta: ${info.tip_objekta}</p> \
					<p>Lučka kapetanija: ${info.lucka_kapetanija}</p>
				`
				)
				.addTo(markerClusters)
		);

		map.addLayer(markerClusters);
	}, [markers, map]);

	map.on("moveend", () => {
		const start = window.performance.now();
		addMarkers();
		const end = window.performance.now();
		console.log(`Time of adding markers and clusters: ${end - start}ms`);
	});

	return null;
};

export default MarkerCluster;
