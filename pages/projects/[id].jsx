import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle(props) {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex items-center gap-x-6">
					<div className="flex items-center">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
					<div className="ml-auto">
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.status}
						</span>
					</div>
				</div>
			</div>

			<p className="font-general-regular text-xl font-semibold text-secondary-dark dark:text-secondary-light mt-12">
				Live
			</p>
			<a className='text-sm text-blue-500' target="_blank" href={props.project.ProjectLink}>{props.project.ProjectLink}</a>

			{/* Gallery */}
			<p className="font-general-regular text-lg font-semibold text-secondary-dark dark:text-secondary-light mt-12">
				Screen Shots
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-4">
				{props.project.ProjectImages.map((project) => {
					return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<Image
								src={project.img}
								className="rounded-xl object-cover object-center shadow-lg sm:shadow-none h-full min-h-[200px]"
								alt={project.title}
								key={project.id}
								width={720}
								height={480}
							/>
						</div>
					);
				})}
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 mt-16 gap-x-4">
				<div className="w-full sm:w-1/3 text-left sm:sticky top-0 left-0 h-max">
					{/* Single project client details */}
					{/* <div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href="https://stoman.me"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div> */}

					{/* Single project objectives */}
					{/* <div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div> */}

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-base text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>

					{/* Single project social sharing */}
					{/* <div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div>
					</div> */}
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{props.project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{props.project.ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					})}
				</div>
			</div>

			{/* <RelatedProjects /> */}
		</div>
	);
}

export async function getStaticPaths() {
	const paths = projectsData.map(project => ({ params: { id: project.link } }))

	return {
		paths: [
			...paths
		],
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const { id } = params;
	const data = projectsData.filter((project) => project.link === id )[0]

	return {
		props: {
			project: data
		},
	};
}

export default ProjectSingle;
