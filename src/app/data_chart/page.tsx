import React from "react";
import GrafanaGas from "@/components/GrafanaGas";
import GrafanaMotion from "@/components/GrafanaMotion";
import GrafanaTemp from "@/components/Grafanatemp";
import Link from "next/link";

const Data_Charts = () => {
	return (
		<div className="bg-gray-300 p-10 rounded shadow-md'">
			<h2 className='text-black text-center font-bold underline'>
				Display Graphs
			</h2>
			<p className='text-left font-semibold'>press on any to view progress:</p>
			<div className=' flex flex-col items-start gap-2'>
				<div className='text-black  no-underline'>
					<GrafanaGas />
				</div>
				<div className='text-black gap-3 no-underline'>
					<GrafanaTemp />
				</div>
				<div className='text-black gap-3 no-underline'>
					<GrafanaMotion />
				</div>
			</div>
		</div>
	);
};

export default Data_Charts;
