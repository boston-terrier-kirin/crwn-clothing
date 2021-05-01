import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAixOv5bT0pCkyaU3Zjs6LAmL8Z4eg4fgw',
	authDomain: 'crwn-db-26663.firebaseapp.com',
	projectId: 'crwn-db-26663',
	storageBucket: 'crwn-db-26663.appspot.com',
	messagingSenderId: '452152543555',
	appId: '1:452152543555:web:899866f34dff2c5a15c7f6',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating user', err);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
