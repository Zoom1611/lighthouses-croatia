import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./TabelOverview.css";

const TabelOverview = ({ data }) => {
	const [page, setPage] = useState(0);
	const dataPerPage = 8;
	const numberOfDataVisited = page * dataPerPage;
	const totalPages = Math.ceil(data.length / dataPerPage);

	const renderTableDataComp = data
		.slice(numberOfDataVisited, numberOfDataVisited + dataPerPage)
		.map(d => {
			return (
				<tr className="bg-white border-b" key={d.properties.pk}>
					<th
						scope="row"
						className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"
					>
						{d.properties.naziv_objekta}
					</th>
					<td className="py-4 px-6 text-gray-600 whitespace-nowrap">
						{d.properties.ps_br}
					</td>
					<td className="py-4 px-6 text-gray-600 whitespace-nowrap">
						{d.properties.e_br}
					</td>
					<td className="py-4 px-6 text-gray-600 whitespace-nowrap">
						{d.properties.tip_objekta}
					</td>
					<td className="py-4 px-6 text-gray-600 whitespace-nowrap">
						{d.properties.lucka_kapetanija}
					</td>
				</tr>
			);
		});

	const renderTableDataMob = data
		.slice(numberOfDataVisited, numberOfDataVisited + dataPerPage)
		.map(d => {
			return (
				<div className="bg-white p-4 rounded-lg shadow" key={d.properties.pk}>
					<div className=" font-semibold text-gray-700">
						Naziv objekta: {d.properties.naziv_objekta}
					</div>
					<div className="text-gray-600">PS broj: {d.properties.ps_br}</div>
					<div className="text-gray-600">E broj: {d.properties.e_br}</div>
					<div className="text-gray-600">
						Tip objekta: {d.properties.tip_objekta}
					</div>
					<div className="text-gray-600">
						Lučka kapetanija: {d.properties.lucka_kapetanija}
					</div>
				</div>
			);
		});

	const changePage = ({ selected }) => {
		setPage(selected);
	};

	return (
		<div className="w-full mt-5 md:mt-10">
			<div className="max-w-[1000px] mx-auto px-8 h-full">
				<h3 className="mb-3 text-center md:text-left font-semibold text-gray-700">
					Lista svjetionika koji se nalaze na Hrvatskoj obali
				</h3>
				<div className="overflow-auto rounded-lg shadow hidden md:block">
					<table className="w-full text-sm text-left text-gray-400 ">
						<thead className="text-xs text-gray-600 uppercase bg-[#f5f5f5]">
							<tr>
								<th scope="col" className="py-3 px-6">
									Naziv objekta
								</th>
								<th scope="col" className="py-3 px-6 w-28">
									PS broj
								</th>
								<th scope="col" className="py-3 px-6 w-28">
									E broj
								</th>
								<th scope="col" className="py-3 px-6 w-28">
									Tip objekta
								</th>
								<th scope="col" className="py-3 px-6 w-28">
									Lučka kapetanija
								</th>
							</tr>
						</thead>
						<tbody>{renderTableDataComp}</tbody>
					</table>
				</div>

				<div className="grid grid-cols-1 gap-4 md:hidden">
					{renderTableDataMob}
				</div>

				{/* TABLE PAGINATION */}
				<div className="mb-10">
					<ReactPaginate
						pageCount={totalPages}
						onPageChange={changePage}
						containerClassName={"navigationButtons"}
						disabledClassName={"navigationDisabled"}
						activeClassName={"navigationActive"}
					/>
				</div>
			</div>
		</div>
	);
};

export default TabelOverview;
