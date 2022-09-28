import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import TabelOverview from "./components/TabelOverview";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
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
					<Route path="/" element={<Map data={data} />} />
					<Route path="/table" element={<TabelOverview data={data} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
