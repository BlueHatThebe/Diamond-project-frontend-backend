"use client";
import React, { useState, useEffect } from "react";
import DataListGas from "@/components/DatalistGas";
import GaugeChartComponent from "@/components/GaugeChart";

const GasSensor: React.FC = () => {
	const [performanceData, setPerformanceData] = useState<number>(0.5); // Default to 50%

	// Optional: Simulate fetching data from an API
	useEffect(() => {
		const fetchData = async () => {
			// Simulate an API call
			const data = await new Promise<number>((resolve) => {
				setTimeout(() => resolve(Math.random()), 2000); // Random value between 0 and 1
			});
			setPerformanceData(data);
		};

		fetchData();
	}, []);

	return (
		<div
			className='card mx-auto mt-9 '
			style={{ maxWidth: "600px", borderRadius: "8px" }}>
			<div className='p-16 card-body bg-gray-400'>
				<h1 className='card-title text-center p-10'>Gas Description</h1>
				<GaugeChartComponent
					id='performance-gauge'
					percent={performanceData}
					text='Current Performance'
				/>
				<DataListGas />
			</div>
		</div>
	);
};

export default GasSensor;
