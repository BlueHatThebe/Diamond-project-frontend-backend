"use client";
<<<<<<< HEAD
import React from "react";
import styled from "styled-components"; // Import styled-components for styling
=======
import React from 'react';
import styled from 'styled-components';
>>>>>>> e416018178003e8dc8a9008bba277b1041a8990c

const Card = styled.div`
	background-color: #ddd; 
	color: #fff;
	border: 1px solid #eaeaea;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-bottom: 20px;

	ul {
		list-style-type: none;
		padding: 0;

		li {
			margin-bottom: 10px;
			border-radius: 8px; 
			overflow: hidden;

			button {
				width: 100%;
				background-color: #000;
				color: #fff;
				border: none;
				padding: 10px;
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #333;
				}
			}
		}
	}
`;

const IndexPage: React.FC = () => {
	type SensorUrls = {
		[key: string]: string;
	};

	const sensorUrls: SensorUrls = {
		"TH Sensor":
			"https://thebzennkhasi.grafana.net/d/bdq0woolrqygwb/temperature-readings?orgId=1&from=1718791516000&to=1718791554000",
		"Gas Sensor":
			"https://thebzennkhasi.grafana.net/d/ddq0yjtggh7gge/gas-sensor-readings?orgId=1&from=1716884097540&to=17194760",
		Motion:
			"https://thebzennkhasi.grafana.net/d/bdq11fygb9y4gf/motion-sensor-readings?orgId=1&from=1719456437103&to=1719478037103",
	};

	const openUrl = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className='p-10'>
<<<<<<< HEAD
			<h1 className='text-center text-white'>Data-Charts</h1>
=======
			<h1 className='text-center' style={{ color: '#fff' }}>List of Datacharts</h1>
>>>>>>> e416018178003e8dc8a9008bba277b1041a8990c

			<Card>
				<h2 style={{ color: '#000' }}>Select an Item</h2> {/* Text color set to black */}
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
