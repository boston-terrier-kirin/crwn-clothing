import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = (props) => {
	console.log('★CollectionsOverview');

	const collectionList = props.collections.map((collection) => (
		<CollectionPreview
			key={collection.id}
			id={collection.id}
			title={collection.title}
			routeName={collection.routeName}
			items={collection.items}
		/>
	));

	return <div className="collections-overview">{collectionList}</div>;
};

const mapStateToProps = (state) => ({
	collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
