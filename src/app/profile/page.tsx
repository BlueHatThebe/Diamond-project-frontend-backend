// pages/Profile.tsx

import React from "react";

const Profile = () => {
	// Hardcoded user data for demonstration
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Example image
	};

	return (
		<div className='container mx-auto p-20'>
			<div className=' mx-auto bg-white rounded-xl overflow-hidden shadow-md'>
				<div className='md:flex'>
					<div className='md:flex-shrink-0'>
						<img
							className='h-48 w-full object-cover md:w-48'
							src={user.avatar}
							alt='User Avatar'
						/>
					</div>
					<div className='p-8'>
						<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
							{user.name}
						</div>
						<p className='mt-2 text-gray-500'>{user.email}</p>
						<p className='mt-2'>{user.bio}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
