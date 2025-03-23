import React from 'react';

const TestimonialSection = () => {
	const testimonials = [
		{
			name: 'Mat Renshaw',
			image: '/people/people-1.png',
			feedback:
				'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
		},
		{
			name: 'Alex Ellis',
			image: '/people/people-2.png',
			feedback:
				'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
		},
		{
			name: 'Cooper Short',
			image: '/people/people-3.png',
			feedback:
				'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
		},
	];

	return (
		<section className='py-16 px-6 bg-[#53389E] text-white text-center'>
			{/* Section Heading */}
			<span className='inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold'>
				Users Feedback
			</span>
			<h2 className='text-4xl font-bold mt-4'>Voices of BondBridge</h2>
			<p className='text-white/90 text-lg mt-3 max-w-3xl mx-auto'>
				Discover why users love BondBridge, real stories and feedback from
				people enjoying secure, anonymous connections and vibrant community
				interactions on every day!
			</p>

			{/* Feedback Cards */}
			<div className='flex flex-wrap lg:flex-nowrap justify-center gap-8 mt-12 max-w-6xl mx-auto'>
				{testimonials.map((user, index) => (
					<div
						key={index}
						className='flex items-start gap-2 max-w-md text-justify'
					>
						{/* Profile Image */}
						<img
							src={user.image}
							alt={user.name}
							className='-mt-4 md:mt-0 size-16 rounded-full object-cover'
						/>

						{/* Testimonial Card */}
						<div className='bg-white text-black p-6 rounded-xl rounded-tl-none shadow-lg w-full'>
							<h3 className='text-lg font-semibold'>{user.name}</h3>
							<p className='text-gray-600 mt-2'>{user.feedback}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialSection;
