import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		console.log('✨', isLoading);
		if (isLoading) {
			console.log('✨');

			return (
				<SpinnerOverlay>
					<SpinnerContainer></SpinnerContainer>
				</SpinnerOverlay>
			);
		}

		return <WrappedComponent {...otherProps} />;
	};
	return Spinner;
};

export default WithSpinner;
