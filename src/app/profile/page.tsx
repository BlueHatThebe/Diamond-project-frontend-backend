import React from "react";
import Avatar from "@/components/avatar";

const ProfilePage: React.FC = () => {
	return (
		<div>
			<h2 className='text-center text-4xl underline font-semibold mb-6 text-white'>
				Employee Profile
			</h2>
			<div className=' flex items-center justify-center'>
				<div className='bg-dark text-white rounded-lg shadow-md p-6 w-full max-w-3xl'>
					<div className='flex flex-col items-center'>
						<Avatar
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'
							alt='User Avatar'
						/>
						<h1 className='text-xl font-bold mb-2'>John Doe</h1>
						<div className='w-full bg-white rounded-lg p-4 mb-4'>
							<h4 className='text-gray-900 text-lg'>Company:</h4>
							<p className='text-gray-700'>Your Company Name</p>
						</div>
						<div className='w-full bg-white rounded-lg p-4'>
							<h4 className='text-gray-900 text-lg'>Employee Details:</h4>
							<p className='text-gray-700'>Details about the employee</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
