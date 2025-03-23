import React, { useState } from 'react';

const GetBondBridge = () => {
	const [selectedOption, setSelectedOption] = useState('phone');
	const [inputValue, setInputValue] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	// Validate input before submitting
	const validateInput = () => {
		if (!inputValue) return 'This field is required';
		if (selectedOption === 'email' && !/^\S+@\S+\.\S+$/.test(inputValue))
			return 'Enter a valid email address';
		if (selectedOption === 'phone' && !/^[0-9+\s()-]+$/.test(inputValue))
			return 'Enter a valid phone number';
		return '';
	};

	// Handle form submission
	const handleSubmit = async () => {
		setError('');
		setSuccess(false);
		const validationError = validateInput();
		if (validationError) {
			setError(validationError);
			return;
		}

		setLoading(true);
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/send-email-generic`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						contactType: selectedOption,
						contactInfo: inputValue,
						intent: 'Download App Link',
					}),
				}
			);

			const result = await response.json();
			if (!response.ok) throw new Error(result.error || 'Something went wrong');

			setSuccess(true);
			setInputValue(''); // Clear input field
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='bg-gray-100 py-24 md:py-40 px-6'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
				{/* Left Content */}
				<div className='w-full md:w-1/2 text-center md:text-justify'>
					<h2 className='text-6xl font-normal text-gray-900'>
						Get <span className='text-[#6A92BB] font-bold'>BondBridge</span>
					</h2>
					<p className='text-gray-600 text-lg mt-4'>
						We will send you a link, open it on your phone to download the app.
					</p>

					{/* Radio Selection */}
					<div className='flex gap-6 mt-6 justify-center md:justify-start'>
						<label className='flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								name='contactMethod'
								value='phone'
								checked={selectedOption === 'phone'}
								onChange={() => setSelectedOption('phone')}
								className='accent-[#6A92BB]'
							/>
							<span className='text-gray-700'>Phone</span>
						</label>
						<label className='flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								name='contactMethod'
								value='email'
								checked={selectedOption === 'email'}
								onChange={() => setSelectedOption('email')}
								className='accent-[#6A92BB]'
							/>
							<span className='text-gray-700'>Email</span>
						</label>
					</div>

					{/* Input Field & Button */}
					<div className='flex gap-4 mt-4 flex-wrap justify-center md:justify-start'>
						<input
							type={selectedOption === 'phone' ? 'tel' : 'email'}
							placeholder={
								selectedOption === 'phone'
									? 'Your Phone Number'
									: 'Your Email Address'
							}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className={`px-4 py-3 w-64 border ${
								error ? 'border-red-500' : 'border-gray-300'
							} rounded-md focus:ring-2 focus:ring-blue-400 outline-none`}
						/>
						<button
							onClick={handleSubmit}
							disabled={loading}
							className={`px-6 cursor-pointer py-3 ${
								loading ? 'bg-gray-400' : 'bg-[#6A92BB] hover:bg-[#527191]'
							} text-white rounded-md font-semibold transition`}
						>
							{loading ? 'Sending...' : 'Share App Link'}
						</button>
					</div>

					{/* Error & Success Messages */}
					{error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
					{success && (
						<p className='text-green-600 text-sm mt-2'>
							App link will be sent shortly!
						</p>
					)}

					{/* Download Buttons */}
					<p className='text-gray-600 text-md mt-6'>Download App From</p>
					<div className='flex gap-4 mt-3 justify-center md:justify-start'>
						<img
							src='/landing/download-google.png'
							alt='Google Play'
							className='w-40'
						/>
						<img
							src='/landing/download-apple.png'
							alt='Apple Store'
							className='w-40'
						/>
					</div>
				</div>

				{/* Right - Mobile Screens */}
				<div className='w-full md:w-1/2 flex justify-center'>
					<img
						src='/mobile-group.png'
						alt='App Preview'
						className='w-full max-w-md md:max-w-lg'
					/>
				</div>
			</div>
		</section>
	);
};

export default GetBondBridge;
