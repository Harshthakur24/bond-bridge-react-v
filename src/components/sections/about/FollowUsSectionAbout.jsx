import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const FollowUsSection = () => {
	return (
		<section className='py-16 px-4 bg-[#FFF9F5] text-center'>
			<h2 className='text-2xl font-bold text-gray-900'>Follow</h2>

			<div className='flex justify-center items-center gap-6 md:gap-12 mt-8 max-w-xl mx-auto border-t pt-6'>
				{/* Facebook */}
				<div className='flex flex-col items-center gap-2'>
					<Facebook className='size-6 text-gray-800' />
					<span className='text-gray-700 text-sm font-semibold'>Facebook</span>
				</div>

				{/* Divider */}
				<div className='h-6 w-px bg-gray-400' />

				{/* Twitter */}
				<div className='flex flex-col items-center gap-2'>
					<Twitter className='size-6 text-gray-800' />
					<span className='text-gray-700 text-sm font-semibold'>Twitter</span>
				</div>

				{/* Divider */}
				<div className='h-6 w-px bg-gray-400' />

				{/* YouTube */}
				<div className='flex flex-col items-center gap-2'>
					<Youtube className='size-6 text-gray-800' />
					<span className='text-gray-700 text-sm font-semibold'>YouTube</span>
				</div>

				{/* Divider */}
				<div className='h-6 w-px bg-gray-400' />

				{/* Instagram */}
				<div className='flex flex-col items-center gap-2'>
					<Instagram className='size-6 text-gray-800' />
					<span className='text-gray-700 text-sm font-semibold'>Instagram</span>
				</div>
			</div>
		</section>
	);
};

export default FollowUsSection;
