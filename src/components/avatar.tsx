import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
	return (
		<div className=' w-60 h-60 rounded-full overflow-hidden border-4 border-gray-300'>
			<img
				src={src}
				alt={alt}
				className='w-full h-full object-cover items-start'
			/>
		</div>
	);
};

export default Avatar;
