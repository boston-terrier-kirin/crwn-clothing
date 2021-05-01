import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-ans-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
	return (
		<div className="sign-in-ans-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
