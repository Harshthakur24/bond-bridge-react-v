import React from 'react';
import { Link } from 'react-router-dom';
import WhatYouCanDo from '../components/sections/about/WhatCanYoDoAbout';
import BeliefStatement from '../components/sections/about/BelieveStatementAbout';
import Partners from '../components/sections/about/Partners';
import OurValues from '../components/sections/about/OurValuesAbout';
import FAQSection from '../components/sections/about/FaqSectionAbout';
import FollowUsSection from '../components/sections/about/FollowUsSectionAbout';
import ExploreSection from '../components/sections/about/ExploreSectionAbout';

const About = () => {
	// Community groups data
	const groups = [
		{
			title: 'Singing Group',
			image: '/about/singing.png',
			description:
				'Join our singing group to harmonize, perform, improve vocals, and share the joy of music together.',
		},
		{
			title: 'Sports Group',
			image: '/about/sports.png',
			description:
				'Join our sports group to play, compete, stay active, build skills, and connect with fellow enthusiasts.',
		},
		{
			title: 'Adventure Group',
			image: '/about/adventure.png',
			description:
				'Join our adventure group to explore, discover new places, embrace challenges, and create experiences with explorers.',
		},
	];

	return (
		<main className='pt-24 md:pt-32 '>
			<section className='relative '>
				<div className='max-w-6xl mx-auto relative z-10 text-center md:text-justify px-6'>
					{/* Heading */}
					<h2 className='text-4xl font-bold text-[#311B92] max-w-md'>
						Chats creates possibilities to find and build local communities
					</h2>

					<p className='text-gray-600 text-lg mt-4 max-w-2xl'>
						People use Meetup to meet new people, learn new things, find
						support, get out of their comfort zones, and pursue their passions,
						together.
					</p>

					{/* Join Button */}
					<Link
						to='/download'
						className='block w-fit mx-auto md:mx-0 my-8 px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-br from-[#A7D0FF] to-[#4C00FF] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700'
					>
						Download Now
					</Link>
				</div>

				{/* Background Illustration */}
				<div className='w-full z-0 opacity-90'>
					<img
						src='/about/people-group.png'
						alt='Community Illustration'
						className='w-full h-auto object-cover'
					/>
				</div>

				{/* Community Groups - Cards */}
				<div className='relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-4 md:mx-auto '>
					{groups.map((group, index) => (
						<div
							key={index}
							className='relative h-[500px] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 overflow-hidden'
						>
							<div className='absolute -top-[600px] size-[800px] items-center bg-black w-xl flex flex-col justify-center pt-40 aspect-square rounded-[245px]'>
								{/* Star Ratings */}
							</div>
							<div className='flex text-white z-10  mt-[50px]'>
								⭐ ⭐ ⭐ ⭐ ⭐
							</div>

							{/* Group Image */}
							<div className='w-40 h-40 z-20 bg-transparent rounded-full overflow-hidden mt-10'>
								<img
									src={group.image}
									alt={group.title}
									className='object-cover'
								/>
							</div>

							{/* Title & Description */}
							<h3 className='text-lg font-bold text-gray-900 mt-3'>
								{group.title}
							</h3>
							<p className='text-gray-600 text-sm mt-2'>{group.description}</p>
						</div>
					))}
				</div>
			</section>
			<WhatYouCanDo />
			<BeliefStatement />
			<OurValues />
			<Partners />
			<FAQSection />
			<ExploreSection />
			<FollowUsSection />
		</main>
	);
};

export default About;
