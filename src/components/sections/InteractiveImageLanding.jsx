import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveImageSection = () => {
	const [isHovered, setIsHovered] = useState(false);

	// Floating Icons with PNGs and Backgrounds
	const icons = [
		{
			id: 1,
			position: { top: '15%', left: '5%' },
			bgColor: 'bg-blue-500',
			icon: '/icons/floating/triangle.png',
		},
		{
			id: 2,
			position: { top: '30%', left: '92%' },
			bgColor: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
			icon: '/icons/floating/instagram.png',
		},
		{
			id: 3,
			position: { top: '60%', left: '90%' },
			bgColor: 'bg-cyan-500',
			icon: '/icons/floating/safe-home.png',
		},
		{
			id: 4,
			position: { top: '50%', left: '-5%' },
			bgColor: 'bg-green-500',
			icon: '/icons/floating/verify.png',
		},
		{
			id: 5,
			position: { top: '70%', left: '2%' },
			bgColor: 'bg-pink-500',
			icon: '/icons/floating/wifi-square.png',
		},
	];

	// Fine-tuned movement values (unchanged)
	const movementOffsets = {
		1: { x: -100, y: -60 },
		2: { x: 100, y: -30 },
		3: { x: 100, y: 60 },
		4: { x: -100, y: 0 },
		5: { x: -100, y: 60 },
	};

	return (
		<div className='flex items-center justify-center p-6 bg-gray-50 py-10 md:py-20'>
			<div className='max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20'>
				{/* Left Section - Image with Floating Icons */}
				<div
					className='relative w-full max-w-md aspect-square group'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* Dashed Circle Outline */}
					<div className='absolute w-full h-full rounded-full border-2 border-dashed border-gray-300'></div>

					{/* Inner Circle */}
					<motion.div
						className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-[32px] rounded-full overflow-hidden transition-all duration-500 ease-out'
						animate={{
							backgroundColor: isHovered ? '#f3e8ff' : '#dab2ff',
							borderWidth: isHovered ? '38px' : '40px',
							borderColor: isHovered ? '#d9b3ff' : '#6941C6',
						}}
					>
						{/* Profile Image Moves Up */}
						<motion.div
							className='absolute z-99 inset-0 -bottom-4 scale-110 rounded-full overflow-hidden'
							animate={{ y: isHovered ? -20 : 0 }}
							transition={{ type: 'spring', stiffness: 120, damping: 10 }}
						>
							<img
								src='/landing/girl-on-phone-1.png'
								alt='Person using phone'
								className='w-full h-full object-contain'
								style={{ objectPosition: 'bottom center' }} // Lower part hidden, head overlaps
							/>
						</motion.div>
					</motion.div>

					{/* Floating Icons (Updated with PNGs and Backgrounds) */}
					{icons.map((icon, index) => (
						<motion.div
							key={icon.id}
							className={`absolute ${icon.bgColor} w-12 h-12 p-2 rounded-full shadow-lg flex items-center justify-center`}
							initial={{ x: 0, y: 0 }}
							animate={{
								x: isHovered ? movementOffsets[index + 1].x : 0,
								y: isHovered ? movementOffsets[index + 1].y : 0,
							}}
							transition={{
								type: 'spring',
								stiffness: 150,
								damping: 8,
								mass: 0.5,
							}}
							style={{
								top: icon.position.top,
								left: icon.position.left,
								transform: 'translate(-50%, -50%)',
							}}
						>
							<img src={icon.icon} alt='' className='w-6 h-6 opacity-90' />
						</motion.div>
					))}
				</div>

				{/* Right Section */}
				<div className='w-full max-w-md text-center md:text-justify'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Bridge the Gap,
						<br />
						Build Bonds
					</h1>

					<p className='text-base md:text-lg text-gray-600 mb-8 leading-relaxed'>
						BondBridge lets you connect anonymously, fostering real
						relationships and open conversations without revealing your
						identity. Build trust, share freely.
					</p>

					<Link
						to={'/download'}
						className='mt-6 w-44 md:w-52 py-3 bg-gray-900 text-white rounded-full flex gap-4 md:gap-6 justify-center items-center hover:gap-2 hover:bg-purple-600 transition-all duration-400 ease-in-out mx-auto md:mx-0'
					>
						<span>Join Now</span>
						<span className='flex justify-center items-center bg-white text-black p-1 rounded-full'>
							<ArrowRight className='size-3' />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InteractiveImageSection;
