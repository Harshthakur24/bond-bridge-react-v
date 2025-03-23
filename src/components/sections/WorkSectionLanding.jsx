import React from 'react';
import SectionHeading from '../SectionHeadingBranded'; // Import the reusable heading component

const WorkSection = () => {
	return (
		<section className='py-16 bg-gray-50 flex flex-col items-center text-center md:px-20'>
			{/* Section Heading */}
			<SectionHeading
				text='The GPT you'
				highlightedText='need at work'
				badgeText='BondChat'
				size='lg:text-5xl md:text-4xl text-3xl'
			/>

			{/* Description */}
			<p className='text-gray-600 text-xl mt-6 max-w-md'>
				BondBridge enhances your workflow with seamless, anonymous communication
				and collaboration tools.
			</p>

			{/* Layout */}
			<div className='flex flex-col md:flex-row items-center gap-12 max-w-6xl mt-12 px-6'>
				{/* Left Side - Image */}
				<div className='w-full max-w-2xl'>
					<img
						src='/gpt-work.png' // Replace with actual image path
						alt='GPT at Work Interface'
						width={800}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default WorkSection;
