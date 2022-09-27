import React from "react";
import { Link } from "react-router-dom";
import { HiTable } from "react-icons/hi";
import { HiMap } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const toggleNav = () => setNav(!nav);

	return (
		<div className="flex justify-between mx-[30px] h-[50px] items-center">
			<div className="text-3xl">LOGO</div>
			<div className="hidden md:flex">
				<div className="mr-[20px]">
					<Link className="flex flex-row items-center" to={"/map"}>
						<HiMap className="text-4xl mr-[3px]" />
						<span>Map</span>
					</Link>
				</div>
				<div>
					<Link className="flex flex-row items-center" to={"/tabel"}>
						<HiTable className="text-4xl mr-[3px]" />
						<span>Tabel</span>
					</Link>
				</div>
			</div>
			<div onClick={toggleNav} className="md:hidden z-10">
				{nav ? (
					<FaTimes className="text-[#3C3C3C]" />
				) : (
					<FaBars className="text-[#3C3C3C]" />
				)}
			</div>
			<div
				className={
					nav
						? "absolute top-0 left-0 w-full h-screen bg-[#F5F5F5] flex flex-col justify-center items-center text-[#3C3C3C]"
						: "hidden"
				}
			>
				<div className="mr-[20px]">
					<Link className="flex flex-row items-center" to={"/map"}>
						<HiMap className="text-4xl mr-[3px]" />
						<span>Map</span>
					</Link>
				</div>
				<div>
					<Link className="flex flex-row items-center" to={"/tabel"}>
						<HiTable className="text-4xl mr-[3px]" />
						<span>Tabel</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
