import { BsTelegram } from "react-icons/bs"
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <BsTelegram />,
		url: 'https://www.youtube.com/c/realstoman',
		color: "hover:text-sky-500 hover:shadow-sky-400"
	}
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl md:text-4xl text-black/80 dark:text-primary-light mb-7">
						Contact me
					</p>
					<ul className="flex gap-4 sm:gap-6">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className={`text-gray-500 ${link.color} hover:bg-opacity-80 hover:scale-105 cursor-pointer rounded-lg bg-gray-100 dark:bg-ternary-dark hover:bg-gray-100 shadow-lg p-4 duration-300`}
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;
