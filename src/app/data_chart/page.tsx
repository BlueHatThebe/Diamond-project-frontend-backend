"use client";
import React, { useState } from "react";
import GrafanaGas from "@/components/GrafanaGas";
import GrafanaMotion from "@/components/GrafanaMotion";
import GrafanaTemp from "@/components/Grafanatemp";
import Link from "next/link";

const DataCharts: React.FC = () => {
	const [showGasGraph, setShowGasGraph] = useState(false);
	const [showTempGraph, setShowTempGraph] = useState(false);
	const [showMotionGraph, setShowMotionGraph] = useState(false);

	const toggleGasGraph = () => {
		setShowGasGraph(!showGasGraph);
	};

	const toggleTempGraph = () => {
		setShowTempGraph(!showTempGraph);
	};

	const toggleMotionGraph = () => {
		setShowMotionGraph(!showMotionGraph);
	};

	return (
		<div className='bg-gray-300 p-10 rounded shadow-md'>
			<h2 className='text-black text-center font-bold underline'>
				Display Graphs
			</h2>
			<p className='text-left font-semibold'>Press on any to view progress:</p>
			<div className='flex flex-col'>
				<Link
					href='#'
					className='text-black mb-2 no-underline'
					onClick={toggleGasGraph}>
					For Gas Sensor
				</Link>
				{showGasGraph && <GrafanaGas />}

				<Link
					href='#'
					className='text-black mb-2 no-underline'
					onClick={toggleTempGraph}>
					For Temperature Sensor
				</Link>
				{showTempGraph && <GrafanaTemp />}

				<Link
					href='#'
					className='text-black mb-2 no-underline'
					onClick={toggleMotionGraph}>
					For the Motion Sensor
				</Link>
				{showMotionGraph && <GrafanaMotion />}
			</div>
		</div>
	);
};

export default DataCharts;
