import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
	firestore,
	convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollection } = this.props;
		const collectionRef = firestore.collection('collection');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionSnapshotToMap(snapshot);
			updateCollection(collectionsMap);

			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		console.log(this.props);

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateCollection: (collectionsMap) =>
			dispatch(updateCollection(collectionsMap)),
	};
};

export default connect(null, mapDispatchToProps)(ShopPage);
