import React from 'react';
import SectionHeading from '../components/SectionHeadingBranded';
import WorkSection from '../components/sections/WorkSectionLanding';

const FeatureItem = ({
	image,
	title,
	highlightedText,
	badgeText,
	description,
	reverse,
}) => {
	return (
		<div
			className={`flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto ${
				reverse ? 'md:flex-row-reverse' : ''
			} text-center md:text-justify`}
		>
			{/* Feature Image */}
			<div className='w-full max-w-sm md:max-w-md flex justify-center'>
				<img
					src={image}
					alt={title}
					className='w-full max-w-[90%] h-auto object-contain'
				/>
			</div>

			{/* Feature Text */}
			<div className='w-full px-4'>
				<SectionHeading
					text={title}
					highlightedText={highlightedText}
					badgeText={badgeText}
					size='text-3xl'
				/>
				<p className='text-gray-600 text-lg md:text-xl lg:text-2xl mt-4'>
					{description}
				</p>
			</div>
		</div>
	);
};

// 🟣 Main How-To-Use Section
const Support = () => {
	const features = [
		{
			image: '/screenshots/mobile-communities.png',
			title: 'Explore different',
			highlightedText: 'Communities',
			badgeText: 'BondChat',
			description:
				'Join BondBridge communities to connect anonymously, share ideas, and build genuine relationships effortlessly.',
			reverse: false,
		},
		{
			image: '/screenshots/anonymity.png',
			title: 'Anonymity',
			highlightedText: 'Guaranteed',
			badgeText: 'BondChat',
			description:
				'BondBridge ensures complete anonymity, allowing you to connect, share, and engage freely without identity concerns.',
			reverse: true,
		},
		{
			image: '/screenshots/mobile-communities.png',
			title: 'Explore different',
			highlightedText: 'Communities',
			badgeText: 'BondChat',
			description:
				'Join BondBridge communities to connect anonymously, share ideas, and build genuine relationships effortlessly.',
			reverse: false,
		},
		{
			image: '/screenshots/anonymity.png',
			title: 'Anonymity',
			highlightedText: 'Guaranteed',
			badgeText: 'BondChat',
			description:
				'BondBridge ensures complete anonymity, allowing you to connect, share, and engage freely without identity concerns.',
			reverse: true,
		},
		{
			image: '/landing/web-mode.png',
			title: 'Available on',
			highlightedText: 'Web Mode',
			badgeText: 'BondChat',
			description:
				'Access BondBridge easily on web mode for seamless anonymous connections anywhere.',
			reverse: false,
		},
		{
			image: '/landing/web-mode.png',
			title: 'Available on',
			highlightedText: 'Web Mode',
			badgeText: 'BondChat',
			description:
				'Access BondBridge easily on web mode for seamless anonymous connections anywhere.',
			reverse: true,
		},
	];

	return (
		<section className='py-24 md:py-32 bg-gray-50 flex flex-col items-center text-center px-6 md:px-20'>
			<h2 className='text-4xl font-bold text-gray-900 mb-12'>
				How to use
				<span className='block w-16 h-2 bg-indigo-300 rounded-full mx-auto mt-2'></span>
			</h2>

			{/* Feature Items */}
			<div className='flex flex-col gap-24 md:gap-32 w-full mt-8'>
				{features.map((feature, index) => (
					<FeatureItem key={index} {...feature} />
				))}
			</div>

			<WorkSection />
		</section>
	);
};

export default Support;
