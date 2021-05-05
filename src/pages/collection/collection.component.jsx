import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = (props) => {
	const { collection } = props;
	const { title, items } = collection;
	const collectionItem = items.map((item) => (
		<CollectionItem key={item.id} item={item} />
	));

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">{collectionItem}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		collection: selectCollection(ownProps.match.params.collectionId)(state),
	};
};

export default connect(mapStateToProps)(CollectionPage);
