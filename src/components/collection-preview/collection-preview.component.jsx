import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = (props) => {
	const { title, items } = props;

	const itemList = items
		.filter((item, idx) => idx < 4)
		.map((item) => (
			<CollectionItem
				key={item.id}
				name={item.name}
				price={item.price}
				imageUrl={item.imageUrl}
			/>
		));

	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">{itemList}</div>
		</div>
	);
};

export default CollectionPreview;
