import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle mobile menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Navigation Bar */}
			<nav className='fixed top-0 w-full py-4 px-4 md:px-16 bg-white text-black flex justify-between items-center shadow-md z-50'>
				{/* Logo */}
				<Link to={'/'} className='w-40 h-auto'>
					<img src='/logo.png' alt='Logo' className='w-full h-auto' />
				</Link>

				{/* Desktop Navigation Links */}
				<div className='hidden md:flex gap-6 lg:gap-8 items-center font-semibold'>
					<Link
						to='/'
						className='hover:text-purple-600 transition-colors duration-200'
					>
						Home
					</Link>
					<Link
						to='/how-to-use'
						className='hover:text-purple-600 transition-colors duration-200'
					>
						Support
					</Link>
					<Link
						to='/about'
						className='hover:text-purple-600 transition-colors duration-200'
					>
						About
					</Link>

					<Link
						to='/contact-us'
						className='hover:text-purple-600 transition-colors duration-200'
					>
						Contact Us
					</Link>

					{/* Fixed Download Button */}
					<Link
						to='/download'
						className='ml-8 px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-br from-[#A7D0FF] to-[#4C00FF] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700'
					>
						Download Now
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button onClick={toggleMenu} className='md:hidden focus:outline-none'>
					{isOpen ? <X className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
				</button>
			</nav>

			{/* Mobile Navigation Menu Overlay */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 ${
					isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={toggleMenu}
			></div>

			{/* Sliding Mobile Menu (Right Side) */}
			<div
				className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col p-6 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} md:hidden z-50`}
			>
				<button onClick={toggleMenu} className='self-end p-2'>
					<X className='w-8 h-8' />
				</button>

				<div className='flex flex-col gap-6 text-lg font-semibold mt-8'>
					<Link
						to='/'
						onClick={toggleMenu}
						className='hover:text-purple-600 transition-colors'
					>
						Home
					</Link>
					<Link
						to='/how-to-use'
						onClick={toggleMenu}
						className='hover:text-purple-600 transition-colors'
					>
						Support
					</Link>
					<Link
						to='/about'
						onClick={toggleMenu}
						className='hover:text-purple-600 transition-colors'
					>
						About
					</Link>
					<Link
						to='/download'
						onClick={toggleMenu}
						className='hover:text-purple-600 transition-colors'
					>
						Download
					</Link>
					<Link
						to='/contact-us'
						onClick={toggleMenu}
						className='hover:text-purple-600 transition-colors'
					>
						Contact Us
					</Link>

					<Link
						to='/download'
						onClick={toggleMenu}
						className='mt-6 px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 text-center'
					>
						Download Now
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
