import React from 'react';
import { Link } from 'react-router-dom';
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Twitter,
} from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-[#101828] text-white py-12 px-6 md:px-12'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
				{/* Left Section - Logo & Contact Info */}
				<div>
					<div className='flex flex-col gap-10 items-center bg-[#1D2939] px-4 py-3 rounded-lg w-fit'>
						<img
							src='/logo-invert.png'
							alt='Bond Bridge Logo'
							className='w-full h-auto'
						/>
						<div className='h-1 w-full border-t-1 border-gray-50/20'></div>
						<div className='my-4 space-y-2'>
							<p className='flex items-center gap-2 text-sm text-gray-300'>
								<img
									src='/icons/location.png'
									alt='Bond Bridge Logo'
									className='size-4'
								/>
								Gautam Buddha Uttar Pradesh
							</p>
							<p className='flex items-center gap-2 text-sm text-gray-300'>
								<img
									src='/icons/sms.png'
									alt='Bond Bridge Logo'
									className='size-4'
								/>
								<a href='mailto:hellomoto2004@gmail.com'>
									hellomoto2004@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* Middle Sections - Other Pages & Products */}
				<div>
					<h3 className='font-semibold text-lg mb-3'>Useful Links</h3>
					<ul className='space-y-2 text-gray-400'>
						<li>
							<Link to='/' className='hover:text-white transition'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/about' className='hover:text-white transition'>
								About Us
							</Link>
						</li>
						<li>
							<Link to='/how-to-use' className='hover:text-white transition'>
								Support
							</Link>
						</li>
						<li>
							<Link to='/contact-us' className='hover:text-white transition'>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='font-semibold text-lg mb-3'>Other</h3>
					<ul className='space-y-2 text-gray-400'>
						<li>
							<Link
								to='/privacy-policy'
								className='hover:text-white transition'
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to='/terms' className='hover:text-white transition'>
								Terms & Conditions
							</Link>
						</li>
					</ul>
				</div>

				{/* Right Section - Subscription Form */}
				<div>
					<h3 className='font-semibold text-lg mb-3'>Stay Updated</h3>
					<form className='flex items-center bg-[#131622] p-2 rounded-full w-fit'>
						<input
							type='email'
							placeholder='Your Email Address'
							className='bg-transparent text-gray-300 text-sm px-4 py-2 outline-none w-48 md:w-56'
						/>
						<button className='bg-white text-black text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition'>
							Subscribe
						</button>
					</form>
					<p className='text-gray-400 text-sm mt-3'>
						Get the latest news & updates
					</p>

					{/* Social Media Icons */}
					<div className='flex gap-4 mt-4'>
						<div className='size-10 bg-[#7F56D9] rounded-full grid place-items-center cursor-pointer hover:scale-110 transition'>
							<a href='https://instagram.com/'>
								<Instagram className='size-4' />
							</a>
						</div>
						<div className='size-10 bg-[#7F56D9] rounded-full grid place-items-center cursor-pointer hover:scale-110 transition'>
							<a href='https://facebook.com/'>
								<Facebook className='size-4' />
							</a>
						</div>
						<div className='size-10 bg-[#7F56D9] rounded-full grid place-items-center cursor-pointer hover:scale-110 transition'>
							<a href='https://instagram.com/'>
								<Twitter className='size-4' />
							</a>
						</div>
						<div className='size-10 bg-[#7F56D9] rounded-full grid place-items-center cursor-pointer hover:scale-110 transition'>
							<a href='https://instagram.com/'>
								<Linkedin className='size-4' />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6'>
				Copyright © 2025 All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
