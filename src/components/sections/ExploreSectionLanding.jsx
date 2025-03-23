import React from 'react';
import { Download, Users, PawPrint } from 'lucide-react';

const ExploreCommunities = () => {
	const communities = [
		{ name: 'Adventures', icon: '/icons/icon_adventures.png' },
		{ name: 'Music', icon: '/icons/icon_music.png' },
		{ name: 'Games', icon: '/icons/icon_games.png' },
		{ name: 'Dating', icon: '/icons/icon_dating.png' },
		{ name: 'Technology', icon: '/icons/icon_technology.png' },
		{ name: 'Fitness', icon: '/icons/icon_fitness.png' },
		{ name: 'Entrepreneurship', icon: '/icons/icon_entrepreneurship.png' },
	];

	return (
		<section className='py-16 bg-gray-50 text-center px-6'>
			{/* Section Heading */}
			<h2 className='text-4xl font-bold text-gray-900'>
				Explore All Communities
			</h2>
			<p className='text-gray-600 text-lg mt-3 max-w-3xl mx-auto'>
				Connect anonymously with diverse communities on BondBridge to share,
				explore, and engage freely.
			</p>

			{/* First row: 4 items */}
			<div className='flex flex-wrap justify-center gap-12 lg:gap-40 mt-12 max-w-5xl mx-auto'>
				{communities.slice(0, 4).map((community, index) => (
					<div
						key={index}
						className='flex flex-col items-center group transition-transform duration-300 hover:scale-105'
					>
						<img
							src={community.icon}
							alt={community.name}
							className='w-20 h-20'
						/>
						<p className='text-lg font-medium mt-3'>{community.name}</p>
					</div>
				))}
			</div>

			{/* Second row: 3 items */}
			<div className='flex flex-wrap justify-center gap-12 lg:gap-40 mt-8 max-w-5xl mx-auto'>
				{communities.slice(4).map((community, index) => (
					<div
						key={index}
						className='flex flex-col items-center group transition-transform duration-300 hover:scale-105'
					>
						<img
							src={community.icon}
							alt={community.name}
							className='w-20 h-20'
						/>
						<p className='text-lg font-medium mt-3'>{community.name}</p>
					</div>
				))}
			</div>

			{/* Community Stats Section */}
			<div className='mt-28 flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto'>
				<div className='flex flex-col items-center'>
					<span className='text-4xl font-bold text-[#006064] flex items-center gap-2'>
						+20M <Download className='w-6 h-6' />
					</span>
					<p className='text-lg text-gray-700'>Download</p>
				</div>

				{/* Divider */}
				<div className='hidden md:block w-px bg-gray-300 h-12'></div>

				<div className='flex flex-col items-center'>
					<span className='text-4xl font-bold text-[#006064] flex items-center gap-2'>
						+48M <Users className='w-6 h-6' />
					</span>
					<p className='text-lg text-gray-700'>Members</p>
				</div>

				{/* Divider */}
				<div className='hidden md:block w-px bg-gray-300 h-12'></div>

				<div className='flex flex-col items-center'>
					<span className='text-4xl font-bold text-[#006064] flex items-center gap-2'>
						+10K <PawPrint className='w-6 h-6' />
					</span>
					<p className='text-lg text-gray-700'>Communities</p>
				</div>
			</div>
		</section>
	);
};

export default ExploreCommunities;
