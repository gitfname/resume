import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		status: "inprogress",
		id: 1,
		link: "Online-Movie-Download-Streaming-Platform",
		title: 'Online Movie Download & Streaming Platform',
		url: 'online-movie-download-streaming-platform',
		category: 'Web Application',
		img: '/images/Screenshot1.png',
		ProjectHeader: {
			title: 'Online Movie Download & Streaming Platform',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Online Movie Download & Streaming Platform',
				img: '/images/Screenshot1.png',
			},
			{
				id: uuidv4(),
				title: 'Online Movie Download & Streaming Platform',
				img: '/images/Screenshot2.png',
			},
			{
				id: uuidv4(),
				title: 'Online Movie Download & Streaming Platform',
				img: '/images/Screenshot3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Nextjs',
						"ChakraUI",
						"BetterScroll",
						"Swiper",
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Project Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Our project is a modern movie download and streaming web application that has been built using the latest technologies such as NextJs, Tailwindcss, and StrapiCms. The application is designed to provide users with a seamless experience when it comes to downloading and streaming their favorite movies.',
				},
				{
					id: uuidv4(),
					details:
						'The UI design of the application is sleek and modern, making it easy for users to navigate through the different sections of the app. The homepage of the app features a list of popular movies that users can easily access by clicking on them. Users can also search for specific movies using the search bar located at the top of the page.',
				},
				{
					id: uuidv4(),
					details:
						'The movie details page provides users with all the necessary information about a particular movie, including its plot summary, cast members, release date, and rating. Users can also watch trailers of movies before deciding to download or stream them.',
				},
				{
					id: uuidv4(),
					details:
						'The download and streaming functionality of the app is powered by StrapiCms, which ensures that users have access to high-quality video files that are free from any malware or viruses. The app also allows users to choose between different video qualities depending on their internet connection speed.',
				},
				{
					id: uuidv4(),
					details:
						'Overall, our movie download and streaming web application is designed to provide users with an enjoyable experience when it comes to watching their favorite movies online. With its modern UI design and powerful features, we believe that our app will be a hit among movie lovers everywhere.',
				}
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	}
];
