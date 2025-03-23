import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		watch,
	} = useForm({
		mode: 'onChange',
	});

	const [messageSent, setMessageSent] = useState(false);
	const watchFields = watch();

	// API Call function
	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/send-email`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) throw new Error('Failed to send email');

			setMessageSent(true);
			reset();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	// Field styling helpers
	const getInputStyle = (fieldName) => {
		const hasError = errors[fieldName];
		return `peer w-full p-4 border ${
			hasError
				? 'border-red-500 focus:border-red-500 focus:ring-red-500'
				: 'border-gray-300 focus:border-[#00BCD4]'
		} rounded-lg focus:ring-2 outline-none transition-colors placeholder-transparent`;
	};

	const getLabelStyle = (fieldName) => {
		const hasError = errors[fieldName];
		const isFilled =
			watchFields[fieldName] && watchFields[fieldName].trim() !== '';

		return `absolute pointer-events-none transition-all duration-200 ${
			isFilled || hasError ? 'top-1 text-xs' : 'top-4 text-base'
		} left-3 ${
			hasError ? 'text-red-500' : isFilled ? 'text-[#00BCD4]' : 'text-gray-500'
		} peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#00BCD4]`;
	};

	return (
		<section className='bg-[#F5F7FA] py-10'>
			<div className='max-w-4xl mx-auto text-center py-16 px-6'>
				<h2 className='text-4xl font-bold text-gray-900'>Contact Us</h2>
				<p className='text-gray-600 text-lg mt-3 max-w-xl mx-auto'>
					Interested in our Machine & Software services? Get in touch, and we'll
					be glad to help.
				</p>

				{/* Success Message */}
				{messageSent && (
					<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6'>
						Your message has been sent successfully!
					</div>
				)}

				{/* Contact Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'
				>
					{/* Name Input */}
					<div className='relative'>
						<input
							{...register('name', { required: 'Name is required' })}
							id='name'
							type='text'
							className={getInputStyle('name')}
							placeholder='What is your name?'
						/>
						<label htmlFor='name' className={getLabelStyle('name')}>
							What is your name? *
						</label>
						{errors.name && (
							<p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
						)}
					</div>

					{/* Email Input */}
					<div className='relative'>
						<input
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^\S+@\S+\.\S+$/,
									message: 'Enter a valid email address',
								},
							})}
							id='email'
							type='email'
							className={getInputStyle('email')}
							placeholder='What is your email?'
						/>
						<label htmlFor='email' className={getLabelStyle('email')}>
							What is your email? *
						</label>
						{errors.email && (
							<p className='text-red-500 text-xs mt-1'>
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Phone Input */}
					<div className='relative'>
						<input
							{...register('phone')}
							id='phone'
							type='tel'
							className={getInputStyle('phone')}
							placeholder='What is your phone number?'
						/>
						<label htmlFor='phone' className={getLabelStyle('phone')}>
							What is your phone number?
						</label>
					</div>

					{/* Company Input */}
					<div className='relative'>
						<input
							{...register('company')}
							id='company'
							type='text'
							className={getInputStyle('company')}
							placeholder='What is your company?'
						/>
						<label htmlFor='company' className={getLabelStyle('company')}>
							What is your company?
						</label>
					</div>

					{/* Message Input */}
					<div className='relative col-span-1 md:col-span-2'>
						<textarea
							{...register('message', { required: 'Message is required' })}
							id='message'
							rows={5}
							className={getInputStyle('message')}
							placeholder='Write your message here'
						></textarea>
						<label htmlFor='message' className={getLabelStyle('message')}>
							Write your message here *
						</label>
						{errors.message && (
							<p className='text-red-500 text-xs mt-1'>
								{errors.message.message}
							</p>
						)}
					</div>

					{/* Terms & Submit Button */}
					<div className='flex flex-col md:flex-row justify-between w-full col-span-1 md:col-span-2 gap-4'>
						<div className='flex items-start space-x-2'>
							<input
								{...register('terms', {
									required: 'You must accept the terms',
								})}
								id='terms'
								type='checkbox'
								className='mt-1 accent-[#00BCD4] h-4 w-4'
							/>
							<label htmlFor='terms' className='text-gray-600 text-sm'>
								I accept the{' '}
								<span className='text-indigo-600 font-medium'>Terms</span> &{' '}
								<span className='text-indigo-600 font-medium'>
									Privacy Policy
								</span>
								*
							</label>
						</div>

						<button
							type='submit'
							className='bg-[#673AB7] rounded-full text-white cursor-pointer py-4 px-8 hover:bg-[#513f71] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed'
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
						</button>
					</div>

					{/* Terms error message */}
					{errors.terms && (
						<div className='col-span-1 md:col-span-2'>
							<p className='text-red-500 text-xs'>{errors.terms.message}</p>
						</div>
					)}
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
