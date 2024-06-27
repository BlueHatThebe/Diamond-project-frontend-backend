"use client";
import React from "react";
import styled from "styled-components"; // Import styled-components for styling

// Styled component for the card
const Card = styled.div`
	background-color: #f0f0f0;
	border: 1px solid #eaeaea;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-bottom: 20px;
`;

const IndexPage: React.FC = () => {
	// Define type for sensor URLs
	type SensorUrls = {
		[key: string]: string;
	};

	// URLs for each sensor
	const sensorUrls: SensorUrls = {
		"TH Sensor":
			"https://thebzennkhasi.grafana.net/d/bdq0woolrqygwb/temperature-readings?orgId=1&from=1718791516000&to=1718791554000",
		"Gas Sensor":
			"https://thebzennkhasi.grafana.net/d/ddq0yjtggh7gge/gas-sensor-readings?orgId=1&from=1716884097540&to=17194760",
		Motion:
			"https://thebzennkhasi.grafana.net/d/bdq11fygb9y4gf/motion-sensor-readings?orgId=1&from=1719456437103&to=1719478037103",
	};

	// Function to open URL in a new tab
	const openUrl = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className='p-10'>
			<h1 className='text-center text-white'>Data-Charts</h1>

			<Card>
				<h2>Select an Item</h2>
				{/* List of clickable buttons */}
				<ul>
					{Object.keys(sensorUrls).map((sensorName, index) => (
						<li key={index}>
							<button onClick={() => openUrl(sensorUrls[sensorName])}>
								{sensorName}
							</button>
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
};

export default IndexPage;
