import React from "react";

const HomeScreen: React.FC = () => {
	return (
		<div className='container'>
			<div className='p-4 border border-gray-200 rounded shadow-md mb-4'>
				<div className='text-center text-white'>
					<h1>Shiny Secure</h1>
				</div>
			</div>
			<div className='bottom-half'>
				{/* Other content for the bottom half */}
			</div>
		</div>
	);
};

export default HomeScreen;
