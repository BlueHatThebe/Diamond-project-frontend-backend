import React from "react";

const HomeScreen: React.FC = () => {
	return (
		<div className='container items-center justify-center'>
			<h1 className="underline text-center text-white">Welcome to Shiny Secure</h1>
			<div className='p-4 border border-gray-400 rounded shadow-md mb-4'>
				<div className='text-center text-white'>
					
					<><h2 className="font-light underline">Bringing satisfying services to those who risk their lives to better the lives of the whole world </h2>
					<p className="p-2 gap-2">Welcome to the forefront of mining technology with our innovative robot equipped with advanced sensor capabilities. Designed to revolutionize the mining industry, our robot integrates cutting-edge sensors to enhance safety, efficiency, and environmental sustainability. From monitoring temperature and humidity to detecting gas leaks in real-time, our robot ensures a secure working environment for miners while optimizing operational productivity. With a commitment to precision engineering and reliability, our robot represents a significant leap forward in mining technology, fostering safer and more sustainable mining practices. Join us in shaping the future of mining with technology that prioritizes safety and efficiency, paving the way for a sustainable and prosperous mining industry for generations to come.</p></>
				</div>
			</div>
			<div className='bottom-half'>
				{/* Other content for the bottom half */}
			</div>
		</div>
	);
};

export default HomeScreen;
