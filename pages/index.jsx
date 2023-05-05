import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />

			<ProjectsGrid />

			<div className="mt-10 sm:mt-15 flex justify-center">
				{/* <div className="font-general-medium flex items-center cursor-pointer px-4 py-2 active:scale-95 transition-transform rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg duration-300"> */}
					<Link href="/projects" aria-label="More Projects" passHref className="font-general-medium flex items-center cursor-pointer px-4 py-2 active:scale-95 transition-transform rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg duration-300">
						<Button title="See More" />
					</Link>
				{/* </div> */}
			</div>
		</div>
	);
}
