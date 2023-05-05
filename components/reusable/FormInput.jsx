const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-sm text-primary-dark dark:text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-4 focus:!ring-0 focus:!border-gray-400 transition-colors duration-200 focus:!outline-none py-2 border border-gray-300 dark:border-black/30 border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm dark:placeholder-white/30"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
