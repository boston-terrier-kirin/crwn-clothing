import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	auth,
	createUserProfileDocument,
	addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import SignInAndSignUpPage from './pages/sign-in-ans-sign-up/sign-in-ans-sign-up.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.css';

import { selectCollectionForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { dispatch, collectionsArray } = this.props;

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

			// Firebaseにデータを投入した時の残骸
			addCollectionAndDocuments(
				'collection',
				collectionsArray.map(({ title, items }) => ({ title, items }))
			);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
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
		currentUser: selectCurrentUser(state),
		collectionsArray: selectCollectionForPreview(state),
	};
};
export default connect(mapStateToProps)(App);
