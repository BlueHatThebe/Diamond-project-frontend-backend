// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className='footer text-center mt-20 bg-dark bottom-0 w-full position-fixed text-lg-start'>
			<div className=' container p-1'>
				{/* Footer content goes here if needed */}
			</div>

			<div className='text-center p-2 text-white'>
				<p>&copy; 2024 Shiny Secure. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
