import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dataJSON from "../data/data.json";
import ReactPaginate from "react-paginate";
import "./TabelOverview.css";

const TabelOverview = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0);
	const dataPerPage = 9;
	const numberOfDataVisited = page * dataPerPage;
	const totalPages = Math.ceil(data.length / dataPerPage);

	useEffect(() => {
		setData(dataJSON.features);
	}, []);

	const renderTableData = data
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
					<td className="py-4 px-6 text-gray-600">{d.properties.ps_br}</td>
					<td className="py-4 px-6 text-gray-600">{d.properties.e_br}</td>
					<td className="py-4 px-6 text-gray-600">
						{d.properties.tip_objekta}
					</td>
					<td className="py-4 px-6 text-gray-600">
						{d.properties.lucka_kapetanija}
					</td>
				</tr>
			);
		});
	const changePage = ({ selected }) => {
		setPage(selected);
	};

	return (
		<div className="w-full mt-5">
			<div className="max-w-[1000px] mx-auto px-8 h-full">
				<table className="w-full text-sm text-left text-gray-400 ">
					<thead className="text-xs text-gray-600 uppercase bg-blue-50">
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
					<tbody>{renderTableData}</tbody>
				</table>
				<ReactPaginate
					previousLabel={"Previous"}
					nextLabel={"Next"}
					pageCount={totalPages}
					onPageChange={changePage}
					containerClassName={"navigationButtons"}
					previousLinkClassName={"previousButton"}
					nextLinkClassName={"nextButton"}
					disabledClassName={"navigationDisabled"}
					activeClassName={"navigationActive"}
				/>
			</div>
		</div>
	);
};

export default TabelOverview;
