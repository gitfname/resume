import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
	{
		text: 'Web Application',
		available: true
	},
	{
		text: 'Cross Platform Hybrid Mobile Application ( Soon ) ',
		available: false
	}
];

function HireMeModal({ onClose, onRequest }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500 grid place-items-center"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center justify-center z-30 w-full">
					<div className="modal h-[90vh]  overflow-y-auto w-full max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="sticky top-0 left-0 bg-secondary-light dark:bg-slate-700 shadow-md shadow-black/5 modal-header flex justify-between gap-10 p-5 dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light  text-lg max-w-[20ch]">
								Hire Me
							</h5>
							<button
								onClick={onClose}
								className="p-1 rounded transition-colors duration-300 font-bold text-primary-dark dark:text-primary-light hover:bg-transparent/5"
							>
								<FiX className="text-xl" />
							</button>
						</div>
						<div className="modal-body p-5 pt-7 w-full h-full">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="max-w-xl m-4 mt-0 text-left"
							>
								<div className="">
									<input
										className="w-full focus:!outline-none focus:ring-0 focus:border-gray-500 transition-colors duration-300 px-4 py-1.5 border border-gray-300 dark:border-secondary-dark rounded-md text-sm bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required
										placeholder="Name"
										aria-label="Name"
									/>
								</div>
								<div className="mt-2.5">
									<input
										className="w-full focus:!outline-none focus:ring-0 focus:border-gray-500 transition-colors duration-300 px-4 py-1.5 border border-gray-300 dark:border-secondary-dark rounded-md text-sm bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="text"
										required
										placeholder="Email"
										aria-label="Email"
									/>
								</div>
								<div className="mt-2.5">
									<select
										className="w-full focus:!outline-none focus:ring-0 focus:border-gray-500 transition-colors duration-300 px-4 py-1.5 border border-gray-300 dark:border-secondary-dark rounded-md text-sm bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										type="text"
										required
										aria-label="Project Category"
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												disabled={!option.available}
												key={option.text}
											>
												{option.text}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full focus:!outline-none focus:ring-0 focus:border-gray-500 transition-colors duration-300 px-4 py-1.5 border border-gray-300 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Project description"
									></textarea>
								</div>

								<div className='flex flex-wrap items-stretch gap-x-2 mt-6'>

									<div>
										<span
											onClick={onRequest}
											type="submit"
											className="px-4
												sm:px-6
												py-2
												text-sm
												grid place-items-center
												sm:py-2.5
												text-white
												bg-indigo-500
												hover:bg-indigo-600
												rounded-md
												focus:ring-1 focus:ring-indigo-900 duration-500"
											aria-label="Submit Request"
										>
											<Button title="Send Request" />
										</span>
									</div>

									<div>
										<span
											onClick={onClose}
											type="button"
											className="px-4 text-sm grid place-items-center
												sm:px-6 h-full
												py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
												rounded-md
												focus:ring-1 focus:ring-indigo-900 duration-500"
											aria-label="Close Modal"
										>
											<Button title="Close" />
										</span>
									</div>

								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
}

export default HireMeModal;
