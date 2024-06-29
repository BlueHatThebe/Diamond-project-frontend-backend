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
			<div className='grid grid-cols-2 gap-4 me-2 ms-2  '>
				<div className=' bg-gray-300  rounded shadow-md flex flex-col items-center justify-center text-center '>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1M7YXICypUewVIyBNUQD8ZMIGy6AoI3T-w&s '
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
				<div className=' bg-gray-300  rounded shadow-md flex flex-col items-center justify-center text-center'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsWU1oJX0RAE9fJF-XQOTX3edDynQmpsqgQ&s'
						className='mr-2'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black  mt-2 no-underline'
						href='/th_sensor'>
						T&H Sensor
					</Link>
				</div>
				<div className=' bg-gray-300  rounded shadow-md flex flex-col items-center justify-center text-center'>
					<img
						src='data:image/png;base64,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'
						className='mr-2 justify-items-center items-center'
						style={{ mixBlendMode: "multiply" }}
					/>
					<Link
						className='block text-center text-black no-underline  mt-2'
						href='/motion'>
						Motion
					</Link>
				</div>
				<div className=' bg-gray-300  rounded shadow-md flex flex-col items-center justify-center text-center'>
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
