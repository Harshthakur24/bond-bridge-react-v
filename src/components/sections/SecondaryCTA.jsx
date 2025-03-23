import React from 'react';

const SecondaryCTA = () => {
	return (
		<section className='flex items-center justify-center py-10 px-6'>
			<div className='w-full max-w-6xl bg-gradient-to-r from-[#4A8FE9] via-[#000000] to-[#DA23C8] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center'>
				<img
					src='/icon-logo.png'
					alt='Bond Bridge Logo'
					className='w-24 md:w-32'
				/>

				<h2
					className='text-3xl md:text-4xl font-bold mt-4 leading-normal'
					style={{
						background: 'linear-gradient(90deg, #4A8FE9, #FFFFFF, #DA23C8)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					Bond Bridge
				</h2>

				<div className='w-20 h-[2px] bg-white opacity-60 mt-2'></div>

				<div className='flex gap-4 mt-6 flex-wrap justify-center'>
					<a href='#'>
						<img
							src='/landing/download-apple.png'
							alt='Download on the App Store'
							className='h-12 md:h-14'
						/>
					</a>
					<a href='#'>
						<img
							src='/landing/download-google.png'
							alt='Get it on Google Play'
							className='h-12 md:h-14'
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default SecondaryCTA;
