import { Search, Plus } from 'lucide-react';

const ExploreSection = () => {
	return (
		<section className='py-16 text-center'>
			<h2 className='text-2xl font-bold text-gray-900'>
				Want to do more of what you love?
			</h2>

			<div className='flex flex-col md:flex-row justify-center items-start gap-12 mt-8 max-w-4xl mx-auto px-4'>
				{/* Discover Groups */}
				<div className='flex items-start gap-3'>
					<Search className='size-6 text-gray-800' />
					<div className='text-justify'>
						<h3 className='font-bold text-gray-900'>Discover groups</h3>
						<p className='text-gray-600 text-sm'>
							See who’s hosting local events for all the things you love.
						</p>
						<a href='#' className='text-blue-600 font-semibold text-sm'>
							Join Meetup
						</a>
					</div>
				</div>

				{/* Start a Group */}
				<div className='flex items-start gap-3'>
					<Plus className='size-6 text-gray-800' />
					<div className='text-justify'>
						<h3 className='font-bold text-gray-900'>Start a group</h3>
						<p className='text-gray-600 text-sm'>
							Create your own Meetup group, and draw from a community of
							millions.
						</p>
						<a href='#' className='text-blue-600 font-semibold text-sm'>
							Start a group
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreSection;
