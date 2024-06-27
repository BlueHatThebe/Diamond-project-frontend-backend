"use client";
import Head from "next/head";
import TemperatureHumidityDisplay from "@/components/TempHumidity";
import DataListTemp from "@/components/DatalistTemp";

const Home = () => {
	return (
		<div>
			<h1 className=' text-center text-white'>T&H Sensor</h1>
			<div
				className='card mx-auto mt-9'
				style={{ maxWidth: "600px", borderRadius: "7px" }}>
				<div className=' p-10'>
					<Head>
						<title>Temperature and Humidity Display</title>
						<meta
							name='description'
							content='Display temperature and humidity sensor data.'
						/>
						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main>
						<h1>Temperature and Humidity</h1>

						<DataListTemp />
					</main>

					{/* <footer>
					<p>Footer content here</p>
				</footer> */}
				</div>
			</div>
		</div>
	);
};

export default Home;
