import React from "react";
import Cookies from "js-cookie";

const ProfilePage: React.FC = () => {
	const userEmail = Cookies.get("userEmail");
	const userCompany = Cookies.get("userCompany");

	return (
		<div>
			<h2 className='text-center text-4xl mb-6 text-white'>Profile</h2>
			<div className='flex items-center justify-center'>
				<div className='bg-dark text-white rounded-lg shadow-md p-6 w-full max-w-3xl'>
					<div className='flex flex-col items-center'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'
							alt='User Avatar'
							className='rounded-full mb-4'
						/>
						<h1 className='text-xl font-bold mb-2'>User Profile</h1>
						<div className='w-full bg-white rounded-lg p-4 mb-4'>
							<h4 className='text-gray-900 text-lg'>Company:</h4>
							<p className='text-gray-700'>{userCompany}</p>
						</div>
						<div className='w-full bg-white rounded-lg p-4'>
							<h4 className='text-gray-900 text-lg'>Email:</h4>
							<p className='text-gray-700'>{userEmail}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
