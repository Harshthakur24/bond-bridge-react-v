import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className='relative w-full lg:min-h-screen flex flex-col items-center justify-center px-8 lg:px-20 pt-28 lg:pt-36 pb-10 lg:py-10'>
			<div className='mx-auto max-w-sm'>
				<img src='/landing/mid-logo.png' className='w-full object-contain' />
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 items-center text-center lg:text-left'>
				<div className='max-w-2xl justify-self-start'>
					<span className='inline-block bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold'>
						Welcome To BondBridge
					</span>
					<h1 className='text-4xl md:text-2xl lg:text-5xl font-bold text-gray-800 mt-4 leading-normal'>
						Socialize Your Social Media With
						<span
							className='block md:inline md:ml-4 leading-normal text-4xl md:text-3xl lg:text-6xl bg-gradient-to-tl from-[#D220FF] to-[#1E17D0] bg-clip-text text-transparent'
							style={{
								backgroundSize: '200% 100%',
								backgroundPosition: '100% 73%',
							}}
						>
							BondBridge
						</span>
					</h1>
					<p className='text-gray-500 text-lg leading-relaxed mt-4 lg:text-justify'>
						BondBridge is an anonymous social media app that lets you connect,
						share, and engage freely without revealing your identity. Build
						genuine connections, express yourself openly, and explore diverse
						conversations in a secure, judgment-free environment.
					</p>
					<Link
						to={'/download'}
						className='mt-6 w-52 py-3 bg-gray-900 text-white rounded-full flex gap-6 justify-center items-center hover:gap-2 hover:bg-purple-600 transition-all duration-400 ease-in-out mx-auto lg:mx-0'
					>
						<span>Get Started</span>
						<span className='flex justify-center items-center bg-white text-black p-1 rounded-full'>
							<ArrowRight className='size-3' />
						</span>
					</Link>
				</div>

				{/* Right Image */}
				<div className='flex justify-center -mr-[20vw]'>
					<img
						src='/landing/hero-image.png'
						alt='Illustration of people collaborating together'
						width={800}
						height={400}
						loading='lazy'
					/>
				</div>

				<img
					className=' fixed top-0 right-0 -z-10 w-50%'
					src='/landing/liquid-bg.png'
					alt='Illustration of people collaborating together'
					height={'90vh'}
					width={'500px'}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
