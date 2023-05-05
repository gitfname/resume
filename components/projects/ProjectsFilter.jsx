const selectOptions = [
	'Web Application'
];

function ProjectsFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border border-gray-200
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
				w-full max-w-xs
				focus:ring-0 focus:outline-none focus:border-gray-400
				transition-colors duration-300
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
