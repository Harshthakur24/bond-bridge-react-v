import React from 'react';

const SectionHeading = ({
	text,
	highlightedText,
	badgeText,
	size = 'lg:text-5xl md:text-4xl text-3xl',
}) => {
	return (
		<h2
			className={`font-bold text-gray-900 ${size} relative text-center md:text-left`}
		>
			{/* Primary Text */}
			<span
				className={`block ${
					size.includes('text-5xl') ? 'min-h-[40px] md:min-h-[60px]' : ''
				}`}
			>
				{text}
			</span>

			{/* Highlighted Text with Badge */}
			<span className='relative inline-block mt-3'>
				<span className='bg-indigo-200 pl-4 pr-4 lg:pr-10 py-1 rounded-lg rounded-tr-none rounded-br-none border-r-4 border-[#7366FE] whitespace-nowrap'>
					{highlightedText}
				</span>

				{/* Badge (Position Adjusts Dynamically) */}
				<span className='absolute bg-[#7366FE] text-white text-[8px] md:text-xs font-medium px-2 py-1 top-[-22px] right-0 translate-x-[93%] md:translate-x-[95%] border-indigo-500 rounded-lg rounded-bl-none'>
					{badgeText}
				</span>
			</span>
		</h2>
	);
};

export default SectionHeading;
