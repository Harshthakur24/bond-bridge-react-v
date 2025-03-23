import React from 'react';

const WhatYouCanDo = () => {
	const features = [
		{
			title: 'Discover',
			highlight: 'Your Tribe',
			image: '/about/your-tribe.png',
			description: 'Meet people in your area who share your passion.',
		},
		{
			title: 'Find Your',
			highlight: 'Interest',
			image: '/about/interest.png',
			description:
				'Explore new hobbies and passions that match your interests.',
		},
		{
			title: 'Live Your',
			highlight: 'Best Life',
			image: '/about/best-life.png',
			description: 'Enjoy every moment, follow your passion, and thrive daily.',
		},
	];

	return (
		<section className='py-16 px-6 bg-gray-50 text-center'>
			<h2 className='text-4xl font-bold text-gray-900 mb-8'>
				What you can do
				<span className='block w-32 h-2 bg-indigo-300 rounded-full mx-auto mt-2'></span>
			</h2>

			{/* Feature Cards */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
				{features.map((feature, index) => (
					<div key={index} className='flex flex-col items-center'>
						<img
							src={feature.image}
							alt={feature.title}
							className='w-full h-auto aspect-square mb-6'
						/>
						<h3 className='text-xl font-bold text-gray-900'>
							{feature.title}{' '}
							<span className='highlight block'>{feature.highlight}</span>
						</h3>
						<p className='text-gray-600 text-sm mt-2'>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhatYouCanDo;
