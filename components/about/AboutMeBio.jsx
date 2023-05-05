import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import dynamic from 'next/dynamic';
const ReactMarkdown = dynamic(() => import("react-markdown"), {ssr: false})
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex mt-2">
			{/* <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpeg"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div> */}

			<div className="font-general-regular w-full text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
							{bio.bio}
						</ReactMarkdown>
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
