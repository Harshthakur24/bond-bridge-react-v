import { ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const faqs = [
	{
		question: 'What is a Payment Gateway?',
		answer:
			'A payment gateway is a technology that captures and transfers payment data from the customer to the acquirer.',
	},
	{
		question:
			'Do I need to pay to Instapay even when there is no transaction going on in my business?',
		answer:
			'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!',
	},
	{
		question: 'What platforms does ACME payment gateway support?',
		answer:
			'ACME payment gateway supports web, mobile apps, and POS systems for seamless transactions.',
	},
	{
		question: 'Does ACME provide international payments support?',
		answer:
			'Yes, ACME allows businesses to accept payments from international customers via multiple currency options.',
	},
	{
		question:
			'Is there any setup fee or annual maintenance fee that I need to pay regularly?',
		answer:
			'No, ACME does not charge any setup or annual maintenance fees. You only pay per transaction.',
	},
];

const FAQSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	let intervalId;

	// Auto-rotate every 5 seconds
	useEffect(() => {
		intervalId = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % faqs.length);
		}, 5000);

		// Cleanup interval on unmount
		return () => clearInterval(intervalId);
	}, []);

	// Handle manual selection (stops auto-switching)
	const handleSelect = (index) => {
		clearInterval(intervalId); // Stop auto-switching
		setActiveIndex(index);
	};

	return (
		<section className='py-16 bg-[#F3F6FD] px-6'>
			<div className='max-w-5xl mx-auto'>
				<h2 className='text-3xl font-bold text-gray-900 mb-8'>
					Frequently Asked Questions
				</h2>

				{/* FAQ Container */}
				<div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center'>
					{/* Left: Questions List */}
					<div className='w-full md:w-1/2 bg-white shadow-xs lg:-mr-10 z-2'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`flex justify-between items-center cursor-pointer py-4 px-4 rounded-md transition ${
									index === activeIndex
										? 'bg-[#FAFBFF] text-gray-900'
										: 'bg-white text-gray-700'
								}`}
								onClick={() => handleSelect(index)}
							>
								<span className='flex items-center gap-3'>
									<span
										className={`size-4 aspect-square rounded-full ${
											index === activeIndex ? 'bg-[#5D5FEF]' : 'bg-[#A5A6F6]'
										}`}
									></span>
									{faq.question}
								</span>
								<span>
									<ChevronRight
										className={`${
											index === activeIndex
												? 'text-[#5D5FEF]'
												: 'text-[#A5A6F6]'
										}`}
									/>
								</span>
							</div>
						))}
					</div>

					{/* Right: Answer Section */}
					<div className='relative w-full md:min-h-100 md:w-1/2 rounded-lg shadow-lg bg-white py-6 px-4 md:pl-16 md:pt-10 z-0'>
						<h3 className='text-lg font-semibold text-gray-900'>
							{faqs[activeIndex].question}
						</h3>
						<p className='text-gray-600 mt-3'>{faqs[activeIndex].answer}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
