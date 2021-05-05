import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = (props) => {
	const collectionList = props.collections.map((collection) => (
		<CollectionPreview
			key={collection.id}
			id={collection.id}
			title={collection.title}
			routeName={collection.routeName}
			items={collection.items}
		/>
	));

	return <div classNMame="collections-overview">{collectionList}</div>;
};

const mapStateToProps = (state) => ({
	collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
