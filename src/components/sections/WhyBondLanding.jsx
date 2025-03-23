import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Lock,
	UserCheck,
	ShieldCheck,
	Server,
	EyeOff,
	Users,
} from 'lucide-react';

const WhyBondBridge = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Features for the first section
	const features = [
		{
			title: 'Secure & Private Messaging',
			description: 'Encrypted chats with no data stored.',
			icon: <Lock className='w-6 h-6 text-purple-600' />,
		},
		{
			title: 'Meet Like-minded Individuals',
			description:
				'Connect with people based on shared interests, not identities.',
			icon: <UserCheck className='w-6 h-6 text-purple-600' />,
		},
		{
			title: 'Freedom of Expression',
			description: 'Share your thoughts openly without fear of judgment.',
			icon: <ShieldCheck className='w-6 h-6 text-purple-600' />,
		},
	];

	// Features for the second section
	const benefits = [
		{
			title: 'Why Choose Us',
			description:
				'An anonymous social app for sharing, chatting, and exploring communities without compromising your privacy.',
			icon: <Server className='w-6 h-6 text-white' />,
		},
		{
			title: 'No Data Tracking',
			description:
				'Your privacy is our priority. No cookies, no data storage, no data sharing.',
			icon: <EyeOff className='w-6 h-6 text-white' />,
		},
		{
			title: 'True Anonymity',
			description:
				'Engage, share, and connect without revealing your identity. Just enjoy your privacy.',
			icon: <Lock className='w-6 h-6 text-white' />,
		},
		{
			title: 'Best People',
			description:
				'Bond with people worldwide in seconds and say what you feel without judgment.',
			icon: <Users className='w-6 h-6 text-white' />,
		},
	];

	// Icon animation variant for the second section
	const iconVariant = {
		hover: {
			rotate: 180,
			transition: { type: 'spring', stiffness: 150, damping: 10 },
		},
	};

	return (
		<section className='py-16 bg-indigo-50 text-center px-6 md:px-20'>
			{/* First Section */}
			<div className='flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto'>
				{/* Left Side - Text Content */}
				<div className='w-full md:w-1/2 text-center md:text-left'>
					<span className='inline-block bg-purple-200 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full'>
						About BondBridge
					</span>
					<h2 className='text-4xl font-bold text-gray-900 mt-4'>
						Why BondBridge?
					</h2>
					<p className='text-gray-600 text-lg mt-3'>
						Download BondBridge to share thoughts, connect anonymously, explore
						vibrant communities, and enjoy secure, judgment-free conversations.
						Privacy guaranteed!
					</p>

					{/* Features List */}
					<div className='mt-6 space-y-4 text-left'>
						{features.map((feature, index) => (
							<div
								key={index}
								onMouseEnter={() => setActiveIndex(index)}
								className={`flex items-center gap-4 p-4 rounded-full transition-all cursor-pointer bg-transparent hover:bg-white`}
							>
								{/* Icon */}
								<div className='size-12 aspect-square flex items-center justify-center rounded-full bg-gray-50 hover:bg-purple-100 transition-all'>
									{feature.icon}
								</div>

								{/* Text */}
								<div>
									<h3 className='text-lg font-semibold text-gray-900'>
										{feature.title}
									</h3>
									<p className='text-gray-600'>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Side Interactive Image */}
				<InteractiveImage />
			</div>

			{/* Separator */}
			<div className='w-full  my-20'></div>

			{/* Second Section */}
			<div className='w-full max-w-5xl mx-auto bg-[#53389E] text-white rounded-xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 shadow-lg'>
				{benefits.map((benefit, index) => (
					<div
						key={index}
						className='group flex flex-col items-center md:items-start gap-4 text-center md:text-left w-full md:w-1/4 px-4 relative transition-all'
					>
						{/* Icon with Rotation & Fill Effect */}
						<motion.div
							className='relative w-16 h-16 flex items-center justify-center '
							variants={iconVariant}
							whileHover='hover'
						>
							<div className='w-12 h-12 flex items-center justify-center bg-[#7F56D9] rounded-full transition-all border-1 border-dashed duration-500 group-hover:bg-transparent '>
								{benefit.icon}
							</div>
						</motion.div>

						{/* Title & Description */}
						<h3 className='text-lg font-semibold'>{benefit.title}</h3>
						<p className='text-sm opacity-90'>{benefit.description}</p>

						{/* Divider except last item */}
						{index !== benefits.length - 1 && (
							<div className='hidden md:block absolute top-4 bottom-4 right-0 w-px bg-white/30'></div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

const InteractiveImage = () => {
	const [isHovered, setIsHovered] = useState(false);

	// Floating glassmorphic boxes (stats)
	const floatingBoxes = [
		{
			id: 1,
			position: { top: '10%', left: '80%' },
			text: 'Brands Joined',
			stat: '85%',
			icon: '/icons/send.png',
		},
		{
			id: 2,
			position: { top: '85%', left: '10%' },
			text: 'Match Rate',
			stat: '85%',
			icon: '/icons/floating/safe-home.png',
		},
	];

	// New simplified offset values
	const movementOffsets = {
		1: { x: 20, y: -30 }, // Up and right
		2: { x: 40, y: -30 }, // Down and left
	};

	return (
		<div
			className='relative w-full max-w-md aspect-square group'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Dashed Circle Outline */}
			<div className='absolute w-full h-full rounded-full border-2 border-dashed border-gray-300'></div>

			{/* Inner Circle with hover effect */}
			<motion.div
				className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full overflow-hidden transition-all duration-500 ease-out'
				animate={{
					backgroundColor: isHovered ? '#f3e8ff' : '#dab2ff',
					borderWidth: isHovered ? '42px' : '45px',
					borderColor: isHovered ? '#d9b3ff' : '#6941C6',
				}}
			>
				{/* Profile Image with hover lift effect */}
				<motion.div
					className='absolute inset-0 -bottom-6 rounded-full overflow-hidden'
					animate={{ y: isHovered ? -20 : 0 }}
					transition={{ type: 'spring', stiffness: 100, damping: 8 }}
				>
					<img
						src='/landing/girl-on-phone-2.png'
						alt='User'
						className='w-full h-full object-contain'
						style={{ objectPosition: 'bottom center' }}
					/>
				</motion.div>
			</motion.div>

			{/* Floating Glassmorphic Boxes with Elastic Effect */}
			{floatingBoxes.map((box) => (
				<motion.div
					key={box.id}
					className={`absolute backdrop-blur-xl bg-white/5 shadow-lg rounded-lg px-6 py-4 flex items-center gap-3 border border-white/20`}
					initial={{ x: 0, y: 0 }}
					animate={
						isHovered
							? {
									x: movementOffsets[box.id].x,
									y: movementOffsets[box.id].y,
							  }
							: { x: 0, y: 0 }
					}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 15,
						mass: 2,
					}}
					style={{
						top: box.position.top,
						left: window.innerWidth < 768 ? '10%' : box.position.left,
						transform: 'translate(-50%, -50%)',
					}}
				>
					<div className='size-10 p-1 aspect-square bg-[#7F56D9] rounded-full grid place-items-center cursor-pointer hover:scale-110 transition'>
						<img src={box.icon} alt={box.text} className='size-6 opacity-90' />
					</div>
					<div className='flex flex-col items-start font-semibold'>
						<p className='text-2xl text-gray-900'>{box.stat}</p>
						<p
							className='text-sm break-keep
 text-gray-700'
						>
							{box.text}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default WhyBondBridge;
