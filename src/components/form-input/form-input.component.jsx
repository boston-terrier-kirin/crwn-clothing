import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...othreProps }) => {
	return (
		<div className="group">
			<input
				className="form-input"
				onChange={handleChange}
				{...othreProps}
			/>
			{label ? (
				<label
					className={`${
						othreProps.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
