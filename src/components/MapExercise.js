import React from "react";
import L from "leaflet";
import lighthouse from "../img/lighthouse.svg";

const getIcon = iconSize => {
	return L.icon({
		iconUrl: lighthouse,
		iconSize: [iconSize],
	});
};

const MapExercise = ({ data }) => {
	let map = L.map("mapid").setView([43.508133, 16.440193], 15);

	let markers = L.markerClusterGroup({
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: false,
		zoomToBoundsOnClick: true,
	});

	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 19,
	}).addTo(map);

	

	return <div id="mapId"></div>;
};

export default MapExercise;
