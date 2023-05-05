import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillEye } from "react-icons/ai"

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.link}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-md hover:shadow-lg cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-white/5 p-3 group">
					<div className='h-56 relative'>
						<Image
							src={props.img}
							className="rounded-xl object-cover object-center h-full"
							alt="Single Project"
							width={720}
							height={480}
						/>

						<div className='absolute rounded-lg top-0 left-0 w-full h-full z-10 bg-black/60
						transition-opacity duration-200 opacity-0 group-hover:opacity-100 grid place-items-center'>
							<div className='p-3 rounded-lg bg-white/20 transition-colors duration-200 cursor-pointer'>
								<AiFillEye className='w-8 h-8 fill-white' />
							</div>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<p className='text-xs text-black/60 dark:text-white/50 font-medium tracking-wide p-3 pb-0'>{props.ProjectHeader.publishDate}</p>
						<p className='text-xs text-black/60 dark:text-white/40 font-normal tracking-wide p-3 pb-0'>{props.status}</p>

					</div>

					<div className="text-center px-4 py-6 pt-4">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-sm text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
