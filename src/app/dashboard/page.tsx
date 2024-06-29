import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Register from "../register/page";

const Dashboard = async () => {
	const session = await getServerSession();
	if (!session) {
		redirect("/");
	}

	return (
		<div className='relative'>
			{/* Dashboard title */}
			<div className='flex flex-col items-center justify-center text-white'> 
			<h1 className=''>
				Dashboard
			</h1>
			</div>
			{/* <div className='bg-[#838080] p-10 rounded shadow-md gap-4'></div> */}
			<div className='grid grid-cols-2 gap-4 me-4 ms-4 '>
				<div className=' bg-gray-300  rounded shadow-md text-center justify-center '>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxektxFUJ0gfKyZzE4UAFtwWxBQaravEbhw&s '
						className='background-position: place-items-center p-1 mb-2 '
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						href='gas_sensor'
						className=' block text-center no-underline text-black'>
						{" "}
						Gas Sensor
					</Link>
				</div>
				<div className='bg-gray-300 p-10 rounded shadow-md'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo7DGhjFKxtiJCknMNfM5-tTnHEPdaikUQ&s'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black  mt-2 no-underline'
						href='/th_sensor'>
						T&H Sensor
					</Link>
				</div>
				<div className='bg-gray-300 p-10 rounded shadow-md'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EIPTaaU91CsIppwUefkn2b9DmdEtHUTIOA&s'
						className='mr-2 justify-items-center items-center'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black no-underline  mt-2'
						href='/motion'>
						Motion
					</Link>
				</div>
				<div className='bg-gray-300 p-10 rounded shadow-md'>
					<img
						src='data:image/png;base64,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'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>

					<Link
						className='block text-center text-black  mt-2 no-underline'
						href='/data_chart'>
						Data Chart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
