import React from 'react';

const OurValues = () => {
	return (
		<section className='py-16 px-6 bg-white text-left max-w-6xl mx-auto grid grid-cols-5 items-end space-y-10'>
			{/* Heading */}
			<div className='col-span-5 md:col-span-2'>
				<h3 className='text-sm font-bold text-gray-600'>OUR VALUES</h3>
				<h2 className='text-4xl font-semibold max-w-xl mt-2 leading-tight text-[#311B92]'>
					BondBridge Upholds Anonymity as Its{' '}
					<span className='highlight block w-fit'>Core Principle</span>
				</h2>
				<p className='text-gray-500 text-md mt-4 max-w-3xl'>
					At BondBridge, we believe that true connections thrive when people are
					free to express themselves without fear of judgment. Our platform is a
					haven for those seeking meaningful conversations, fresh perspectives,
					and genuine relationships — all while remaining anonymous.
				</p>
				<p className='text-gray-500 text-md mt-4 max-w-3xl'>
					We&apos;ve built BondBridge to break down social barriers and provide
					a digital space where your voice, thoughts, and ideas matter more than
					your name or background.
				</p>
			</div>

			{/* Mission and Vision */}
			<div className='grid grid-cols-1 md:grid-cols-2 col-span-5 md:col-span-3 gap-10'>
				<div className='flex flex-col items-start gap-4'>
					<img
						src='/about/mission.png'
						alt='Mission'
						className='size-40  w-full h-auto md:h-[200px]'
					/>
					<div>
						<h4 className='text-xl font-semibold text-purple-700'>
							Our Mission
						</h4>
						<p className='text-gray-600 text-md mt-2'>
							To create an inclusive platform that empowers users to share,
							connect, and engage anonymously while feeling safe and respected.
						</p>
					</div>
				</div>

				<div className='flex flex-col items-start gap-4'>
					<img
						src='/about/vision.png'
						alt='Vision'
						className='size-40  w-full h-auto md:h-[200px]'
					/>
					<div>
						<h4 className='text-xl font-semibold text-purple-700'>
							Our Vision
						</h4>
						<p className='text-gray-600 text-md mt-2'>
							To be the leading anonymous social media app that fosters genuine
							human connections through privacy, trust, and innovation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurValues;
