import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTable, HiMap } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const toggleNav = () => setNav(!nav);

	return (
		<div className="flex justify-between px-[15px] md:px-[30px] h-[50px] items-center bg-[#F5F5F5]">
			<div className="text-2xl md:text-3xl text-[#57A5F1]">
				<Link to={"/"}>LightHousesCroatia</Link>
			</div>
			<div className="hidden md:flex">
				<div className="mr-[20px] hover:text-[#57A5F1] text-[#6e6e6e]">
					<Link className="flex flex-row items-center" to={"/"}>
						<HiMap className="text-4xl mr-[3px]" />
						<span>Karta</span>
					</Link>
				</div>
				<div className="hover:text-[#57A5F1] text-[#6e6e6e]">
					<Link className="flex flex-row items-center" to={"/table"}>
						<HiTable className="text-4xl mr-[3px]" />
						<span>Tablica</span>
					</Link>
				</div>
			</div>

			<div onClick={toggleNav} className="md:hidden z-20">
				{nav ? (
					<FaTimes className="text-[#6e6e6e] hover:text-[#57A5F1]" />
				) : (
					<FaBars className="text-[#b5b5b5] hover:text-[#57A5F1]" />
				)}
			</div>

			<div
				className={
					nav
						? "z-10 text-5xl absolute z-1 top-0 left-0 w-full h-screen bg-[#F5F5F5] flex flex-col justify-center items-center text-[#3C3C3C]"
						: "hidden"
				}
			>
				<div className="mb-20 hover:text-[#57A5F1] text-[#6e6e6e]">
					<Link
						onClick={() => setNav(!nav)}
						className="flex flex-row items-center"
						to={"/"}
					>
						<HiMap className="mr-[3px]" />
						<span>Karta</span>
					</Link>
				</div>
				<div className="hover:text-[#57A5F1] text-[#6e6e6e]">
					<Link
						onClick={() => setNav(!nav)}
						className="flex flex-row items-center"
						to={"/table"}
					>
						<HiTable className="mr-[3px]" />
						<span>Tablica</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
