import React from 'react';
import {
	MessageSquare,
	TrendingUp,
	Send,
	BarChart2,
	ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ActiveUsersSection = () => {
	return (
		<section className='relative bg-[#F5F3FF] overflow-hidden py-20 md:py-32'>
			{/* Background Shape */}
			<div className='absolute top-0 left-0 w-full'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'
					className='w-full'
				>
					<path
						fill='#E9E4FF'
						fillOpacity='1'
						d='M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,133.3C1120,149,1280,203,1360,229.3L1440,256V0H0Z'
					></path>
				</svg>
			</div>

			{/* Content Container */}
			<div className='relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
				{/* Left Section - Text & Button */}
				<div className='flex flex-col items-center md:items-start text-center md:text-justify'>
					<span className='inline-block bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold'>
						About BondBridge
					</span>
					<h2 className='text-4xl font-bold text-gray-900 mt-4'>
						Number of Currently Active Users
					</h2>
					<p className='text-gray-600 text-lg mt-3 max-w-md'>
						Join thousands of active users on BondBridge, where anonymous
						connections thrive. Engage in real-time conversations, explore
						diverse communities, and experience a secure platform trusted by a
						growing global community every day!
					</p>

					<Link
						to={'/download'}
						className='mt-6 w-52 py-3 bg-gray-900 text-white rounded-full flex gap-6 justify-center items-center hover:gap-2 hover:bg-purple-600 transition-all duration-400 ease-in-out'
					>
						<span>Join Now</span>
						<span className='flex justify-center items-center bg-white text-black p-1 rounded-full'>
							<ArrowRight className='size-3' />
						</span>
					</Link>
				</div>

				{/* Right Section - Stats Boxes */}
				<div className='relative flex justify-center'>
					{/* Dashed Border Background Square */}
					<div className='absolute inset-[48px] lg:inset-[100px] border-2 border-dashed border-purple-300 rounded-xl'></div>

					{/* Stats Grid */}
					<div className='grid grid-cols-2 gap-6 relative'>
						{/* Upper Row */}
						<div className='group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#53389E]'>
							<MessageSquare className='w-10 h-10 text-gray-900 mb-3 transition-all duration-300 group-hover:text-white' />
							<p className='text-2xl font-bold group-hover:text-white'>
								8,550 +
							</p>
							<span className='text-gray-600 text-sm transition-all duration-300 group-hover:text-white'>
								Secure Connections
							</span>
						</div>

						<div className='group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#53389E]'>
							<TrendingUp className='w-10 h-10 text-gray-900 mb-3 transition-all duration-300 group-hover:text-white' />
							<p className='text-2xl font-bold group-hover:text-white'>160 +</p>
							<span className='text-gray-600 text-sm transition-all duration-300 group-hover:text-white'>
								Thriving Communities
							</span>
						</div>

						{/* Lower Row */}
						<div className='group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#53389E]'>
							<Send className='w-10 h-10 text-gray-900 mb-3 transition-all duration-300 group-hover:text-white' />
							<p className='text-2xl font-bold group-hover:text-white'>
								3,500 +
							</p>
							<span className='text-gray-600 text-sm transition-all duration-300 group-hover:text-white'>
								Conversations Started
							</span>
						</div>

						<div className='group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#53389E]'>
							<BarChart2 className='w-10 h-10 text-gray-900 mb-3 transition-all duration-300 group-hover:text-white' />
							<p className='text-2xl font-bold group-hover:text-white'>500 +</p>
							<span className='text-gray-600 text-sm transition-all duration-300 group-hover:text-white'>
								Daily Engagements
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActiveUsersSection;
