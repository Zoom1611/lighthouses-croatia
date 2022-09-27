import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import TabelOverview from "./components/TabelOverview";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import MapExercise from "./components/MapExercise";
import "leaflet/dist/leaflet.css";

import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("https://plovput.li-st.net/getObjekti/");
			setData(data.features);
		};

		fetchData();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/map" element={<Map data={data} />} />
					<Route path="/tabel" element={<TabelOverview />} />
					<Route path="/map2" element={<MapExercise data={data} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
