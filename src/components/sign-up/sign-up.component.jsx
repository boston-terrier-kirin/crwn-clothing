import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handdleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		console.log('👍', this.state);

		try {
			const { user } = auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have a account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handdleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onSubmit={this.handdleSubmit}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onSubmit={this.handdleSubmit}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onSubmit={this.handdleSubmit}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onSubmit={this.handdleSubmit}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
