import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function MobileMenu({showHireMeModal}) {
	const [showMenu, setShowMenu] = useState(false);

	const _showHireMeModal = useCallback(
		() => {
			setShowMenu(false)
			showHireMeModal()
		}
	)
	
	return (
		<>
			<div className="sm:hidden">
				<button
					onClick={() => setShowMenu(true)}
					type="button"
					className="focus:outline-none"
					aria-label="Hamburger Menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
					>
						<FiMenu className="text-3xl" />
					</svg>
				</button>
			</div>
			
			<div onClick={() => setShowMenu(false)} className={`${showMenu&&"!opacity-100 !pointer-events-auto"} transition-opacity duration-300 pointer-events-none fixed top-0 left-0 w-screen h-screen z-[990] opacity-0 bg-black/40`}></div>

			<div
				className={
					`${showMenu&&"!translate-x-0"} translate-x-full transition-transform duration-300 fixed bg-white dark:bg-slate-700 top-0 right-0 w-5/12 h-screen z-[999] flex flex-col items-center pt-6`
				}
			>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
					<Link onClick={() => setShowMenu(false)} href="/" aria-label="Home">
						Home
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link onClick={() => setShowMenu(false)} href="/projects" aria-label="Projects">
						Projects
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link onClick={() => setShowMenu(false)} href="/about" aria-label="About Me">
						About Me
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link onClick={() => setShowMenu(false)} href="/contact" aria-label="Contact">
						Contact
					</Link>
				</div>
				<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<button
						onClick={_showHireMeModal}
						className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
						aria-label="Hire Me Button"
					>
						Hire Me
					</button>
				</div>
			</div>
		</>
	)
}

function AppHeader() {
	const router = useRouter()
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [isBrowser, ssetIsBrowser] = useState(false)

	useEffect(
		() => {
			ssetIsBrowser(true)
		},
		[]
	)


	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<>
			{
				!isBrowser
				?
					null
				:
				<div
					id="nav"
					className="sm:mx-auto"
				>
					{/* Header */}
					<div className="z-10 mx-auto w-full px-10 block sm:flex sm:justify-between sm:items-center py-3 pt-5">
						{/* Header menu links and small screen hamburger menu */}
						<div className="flex justify-between items-center px-4 sm:px-0">
							{/* <div>
								<Link href="/">
									{activeTheme === 'dark' ? (
										<Image
											src={logoDark}
											className="w-36 cursor-pointer"
											alt="Dark Logo"
											width={150}
											height={120}
										/>
									) : (
										<Image
											src={logoLight}
											className="w-36 cursor-pointer"
											alt="Dark Logo"
											width={150}
											height={120}
										/>
									)}
								</Link>
							</div> */}
		
							{/* Theme switcher small screen */}
							<div
								onClick={() => setTheme(activeTheme)}
								aria-label="Theme Switcher"
								className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
							>
								{activeTheme === 'dark' ? (
									<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
								) : (
									<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
								)}
							</div>
		
							{/* Small screen hamburger menu */}
							<MobileMenu showHireMeModal={showHireMeModal} />
		
						</div>
		
						{/* Header links large screen */}
						<div className="font-general-medium flex-1 hidden sm:flex items-center shadow-lg sm:shadow-none gap-x-2">
							<Link href="/"
								className={`${router.pathname==="/"&&"!bg-transparent/5 dark:!bg-white/10"} cursor-pointer hover:bg-transparent/5 px-2.5 transition-colors duration-200 rounded-lg block text-left text-sm font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:py-2`}
								aria-label="Home"
							>
								Home
							</Link>
							<Link href="/projects"
								className={`${router.pathname==="/projects"&&"!bg-transparent/5 dark:!bg-white/10"} cursor-pointer hover:bg-transparent/5 px-2.5 transition-colors duration-200 rounded-lg block text-left text-sm font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:py-2`}
								aria-label="Projects"
							>
								Projects
							</Link>
							<Link href="/about"
								className={`${router.pathname==="/about"&&"!bg-transparent/5 dark:!bg-white/10"} cursor-pointer hover:bg-transparent/5 px-2.5 transition-colors duration-200 rounded-lg block text-left text-sm font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:py-2`}
								aria-label="About Me"
							>
								About Me
							</Link>
		
							<Link href="/contact"
								className={`${router.pathname==="/contact"&&"!bg-transparent/5 dark:!bg-white/10"} cursor-pointer hover:bg-transparent/5 px-2.5 transition-colors duration-200 rounded-lg block text-left text-sm font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:py-2`}
								aria-label="Contact"
							>
								Contact
							</Link>
						</div>
		
						{/* Header right section buttons */}
						<div className="hidden sm:flex justify-between items-center flex-col md:flex-row gap-x-2.5">
							<div className="hidden md:flex">
								<button
									onClick={showHireMeModal}
									className="text-sm font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 duration-300"
									aria-label="Hire Me Button"
								>
									Hire Me
								</button>
							</div>
		
							{/* Theme switcher large screen */}
							<div
								onClick={() => setTheme(activeTheme)}
								aria-label="Theme Switcher"
								className="bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-lg cursor-pointer"
							>
								{activeTheme === 'dark' ? (
									<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-lg" />
								) : (
									<FiSun className="text-gray-200 hover:text-gray-50 text-lg" />
								)}
							</div>
						</div>
					</div>
		
					<div>
						{showModal ? (
							<HireMeModal
								onClose={showHireMeModal}
								onRequest={showHireMeModal}
							/>
						) : null}
						{showModal ? showHireMeModal : null}
					</div>
				</div>
			}
		</>
	);
}

export default AppHeader;
