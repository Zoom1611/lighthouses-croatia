import React from "react";
import lighthousePhoto from "../img/lighthousePhoto.jfif";

const Home = () => {
	return (
		<div className="top-0 bottom-0 left-0 right-0">
			<img
				className="object-cover w-full h-full bg-center bg-cover bg-local"
				src={lighthousePhoto}
				alt="Lighthouse"
			/>
		</div>
	);
};

export default Home;
