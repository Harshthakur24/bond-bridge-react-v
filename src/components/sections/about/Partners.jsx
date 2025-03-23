const Partners = () => {
	return (
		<section className='py-16 px-6 bg-gray-50 text-left max-w-6xl mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div>
					<h3 className='text-sm font-bold text-gray-600'>PARTNERS</h3>
					<h2 className='text-4xl font-semibold text-[#311B92] max-w-xl mt-2 leading-tight'>
						Ask our <span className='highlight'>happy customers</span> about our
						quality
					</h2>
				</div>

				<p className='text-gray-600 text-md mt-4 max-w-3xl'>
					At BondBridge, diverse anonymous voices foster genuine connections
					through open dialogue, sharing unique perspectives freely, beyond
					social labels and identities.
				</p>
			</div>

			{/* Partner Images */}
			<div className='w-full mt-16'>
				<img
					src={'/about/people-customers.png'}
					alt={`Partners List`}
					className='w-full object-contain '
				/>
			</div>
		</section>
	);
};

export default Partners;
