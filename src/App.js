import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

import SignInAndSignUpPage from './pages/sign-in-ans-sign-up/sign-in-ans-sign-up.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { dispatch } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					dispatch(
						setCurrentUser({ id: snapShot.id, ...snapShot.data() })
					);
				});
			}
			dispatch(setCurrentUser(userAuth));
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		console.log('💨', this.props.currentUser);

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

// connectしているのでdispatchだけが使えるようになる。
// export default connect()(App);

const mapStateToProps = (state) => {
	return {
		// これでAppのprops.currentUserに、storeで管理しているcurrentUserが紐づく
		currentUser: state.user.currentUser,
	};
};
export default connect(mapStateToProps)(App);
